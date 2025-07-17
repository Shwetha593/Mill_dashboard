// src/components/Home/MilkProductionDashboard.js
import React, { useRef, useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import './MilkProductionDashboard.css'; // Link to its CSS

// Register Chart.js components globally for use with react-chartjs-2
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const MilkProductionDashboard = () => {
  // Refs for each chart instance to enable zooming
  const monthlyMilkChartRef = useRef(null);
  const dailyMilkChartRef = useRef(null);
  const salesChartRef = useRef(null);
  const farmerChartRef = useRef(null);
  const zoomedChartRef = useRef(null); // Ref for the canvas in the modal

  // State for modal visibility and the configuration of the chart to be zoomed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomedChartConfig, setZoomedChartConfig] = useState(null);

  // --- Chart Data and Options (translated from your HTML script) ---

  const monthlyMilkData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Cow Milk (L)",
        backgroundColor: "#6f42c1", // Modern purple
        data: [3000, 3500, 4000, 4500, 4200, 4700, 5000, 5300, 4900, 5100, 4800, 5000],
        borderRadius: 4, // Rounded bars
      },
      {
        label: "Buffalo Milk (L)",
        backgroundColor: "#17a2b8", // Modern teal
        data: [2000, 2200, 2500, 2600, 2400, 2700, 2900, 3000, 2800, 2900, 2700, 2850],
        borderRadius: 4,
      }
    ]
  };

  const monthlyMilkOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows CSS to control height
    plugins: {
      title: { display: false }, // Title is handled by h3 tag in JSX
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 13, family: 'Inter, sans-serif' },
          color: '#5a677e', // Muted legend text
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw} L`,
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker tooltip
        bodyFont: { family: 'Inter, sans-serif' },
        titleFont: { family: 'Inter, sans-serif' },
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2000,
          max: 6000,
          callback: v => v + ' L',
          font: { family: 'Inter, sans-serif', size: 12 },
          color: '#78909c' // Muted axis labels
        },
        grid: { color: '#ebf1f6', drawBorder: false } // Lighter grid, no border
      },
      x: {
        ticks: {
          font: { family: 'Inter, sans-serif', size: 12 },
          color: '#78909c'
        },
        grid: { display: false } // No vertical grid lines
      }
    }
  };

  const dailyMilkData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      { label: "Cow Milk (L)", backgroundColor: "#6f42c1", data: [900, 1000, 1100, 1050, 980, 950, 920], borderRadius: 4 },
      { label: "Buffalo Milk (L)", backgroundColor: "#17a2b8", data: [700, 750, 800, 780, 760, 740, 730], borderRadius: 4 }
    ]
  };

  const dailyMilkOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: false },
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 13, family: 'Inter, sans-serif' },
          color: '#5a677e',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw} L`,
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyFont: { family: 'Inter, sans-serif' },
        titleFont: { family: 'Inter, sans-serif' },
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: v => v + ' L',
          font: { family: 'Inter, sans-serif', size: 12 },
          color: '#78909c'
        },
        grid: { color: '#ebf1f6', drawBorder: false }
      },
      x: {
        ticks: {
          font: { family: 'Inter, sans-serif', size: 12 },
          color: '#78909c'
        },
        grid: { display: false }
      }
    }
  };

  const salesData = {
    labels: ["Retail", "Wholesale", "Exports"],
    datasets: [{
      backgroundColor: ["#6f42c1", "#ffca28", "#dc3545"], // Purple, Amber, Red
      borderWidth: 0,
      data: [50, 30, 20]
    }]
  };

  const salesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", // Doughnut hole size
    plugins: {
      title: { display: false },
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 13, family: 'Inter, sans-serif' },
          color: '#5a677e',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyFont: { family: 'Inter, sans-serif' },
        titleFont: { family: 'Inter, sans-serif' },
        padding: 10,
        cornerRadius: 6,
      },
    }
  };

  const farmerData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Registrations",
      borderColor: "#6f42c1", // Modern purple line
      backgroundColor: "rgba(111, 66, 193, 0.2)", // Light purple fill
      fill: true,
      tension: 0.4, // Smooth curve
      data: [300, 400, 500, 550, 600, 650, 700, 750, 800, 820, 850, 880],
      pointBackgroundColor: '#6f42c1',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#6f42c1',
      pointHoverBorderColor: '#fff',
      pointRadius: 4, // Size of data points
      pointHoverRadius: 6, // Size on hover
    }]
  };

  const farmerOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: false },
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 13, family: 'Inter, sans-serif' },
          color: '#5a677e',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyFont: { family: 'Inter, sans-serif' },
        titleFont: { family: 'Inter, sans-serif' },
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { family: 'Inter, sans-serif', size: 12 },
          color: '#78909c'
        },
        grid: { color: '#ebf1f6', drawBorder: false }
      },
      x: {
        ticks: {
          font: { family: 'Inter, sans-serif', size: 12 },
          color: '#78909c'
        },
        grid: { display: false }
      }
    }
  };

  // --- Modal Zoom Logic ---

  // Helper function to store the full chart config on the chart instance
  // This is crucial for correctly recreating the chart in the modal.
  const createChartProps = (type, data, options, chartRef) => ({
    ref: chartRef,
    type,
    data,
    options: {
      ...options,
      // Store the full config as a custom option for easy retrieval during zoom
      chartConfig: { type, data, options }
    },
    // This prop gives us access to the Chart.js instance after it's rendered
    getChartInstance: (instance) => {
      if (chartRef.current) {
        chartRef.current.chartInstance = instance; // Store the Chart.js instance
      }
    },
  });

  // Function to open the modal with the clicked chart's configuration
  const zoomChart = (chartInstance) => {
    if (chartInstance && chartInstance.options && chartInstance.options.chartConfig) {
      // Deep copy the config to avoid issues with Chart.js modifying original objects
      const configToZoom = JSON.parse(JSON.stringify(chartInstance.options.chartConfig));
      setZoomedChartConfig(configToZoom);
      setIsModalOpen(true);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setZoomedChartConfig(null);
    // Destroy the zoomed chart instance when modal closes to free up memory
    if (zoomedChartRef.current && zoomedChartRef.current.chartInstance) {
      zoomedChartRef.current.chartInstance.destroy();
      zoomedChartRef.current.chartInstance = null;
    }
  };

  // Effect to render the zoomed chart when the modal opens
  useEffect(() => {
    if (isModalOpen && zoomedChartConfig && zoomedChartRef.current) {
      const ctx = zoomedChartRef.current.getContext('2d');
      // If a previous chart exists in the modal, destroy it before creating a new one
      if (zoomedChartRef.current.chartInstance) {
        zoomedChartRef.current.chartInstance.destroy();
      }
      // Create new Chart.js instance in the modal canvas
      zoomedChartRef.current.chartInstance = new ChartJS(ctx, {
        type: zoomedChartConfig.type,
        data: zoomedChartConfig.data,
        options: {
          ...zoomedChartConfig.options,
          maintainAspectRatio: false, // Important for modal chart sizing
        },
      });
    }
  }, [isModalOpen, zoomedChartConfig]);

  // Effect to close modal on outside click (window click)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was on the modal background itself (not content)
      if (isModalOpen && event.target.classList.contains('modal')) {
        closeModal();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="milk-dashboard-charts-container">
        {/* Monthly Milk Production Chart */}
        <div className="chart-card" onClick={() => zoomChart(monthlyMilkChartRef.current.chartInstance)}>
          <div className="card-header">
            <h3 className="card-title">Monthly Milk Production (L)</h3>
          </div>
          <div className="chart-wrapper97">
            <Bar {...createChartProps('bar', monthlyMilkData, monthlyMilkOptions, monthlyMilkChartRef)} />
          </div>
        </div>

        {/* Daily Milk Production Chart */}
        <div className="chart-card" onClick={() => zoomChart(dailyMilkChartRef.current.chartInstance)}>
          <div className="card-header">
            <h3 className="card-title">Daily Milk Production (L)</h3>
          </div>
          <div className="chart-wrapper">
            <Bar {...createChartProps('bar', dailyMilkData, dailyMilkOptions, dailyMilkChartRef)} />
          </div>
        </div>

        {/* Sales Breakdown Chart (Doughnut) */}
        <div className="chart-card small-donut" onClick={() => zoomChart(salesChartRef.current.chartInstance)}>
          <div className="card-header">
            <h3 className="card-title">Sales Breakdown</h3>
          </div>
          <div className="chart-wrapper97">
            <Doughnut {...createChartProps('doughnut', salesData, salesOptions, salesChartRef)} />
          </div>
        </div>

        {/* Farmer Registrations Chart (Line) */}
        <div className="chart-card" onClick={() => zoomChart(farmerChartRef.current.chartInstance)}>
          <div className="card-header">
            <h3 className="card-title">Farmer Registrations</h3>
          </div>
          <div className="chart-wrapper">
            <Line {...createChartProps('line', farmerData, farmerOptions, farmerChartRef)} />
          </div>
        </div>
      </div>

      {/* Modal for zoomed charts */}
      {isModalOpen && (
        <div id="chartModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="zoomed-chart-wrapper">
              <canvas id="zoomedChart" ref={zoomedChartRef}></canvas>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MilkProductionDashboard;