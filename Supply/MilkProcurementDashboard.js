import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './MilkProcurementDashboard.css';

const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  cow: [200, 250, 240, 260, 300, 280],
  buffalo: [180, 200, 210, 190, 220, 210],
  other: [50, 55, 60, 58, 65, 70],
};

const weeklyData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  cow: [70, 80, 75, 90],
  buffalo: [60, 65, 70, 68],
  other: [15, 18, 20, 22],
};

const MilkProcurementDashboard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [filter, setFilter] = useState('monthly');

  const getChartData = () => {
    const data = filter === 'monthly' ? monthlyData : weeklyData;
    return {
      labels: data.labels,
      datasets: [
        {
          label: 'Cow Milk',
          data: data.cow,
          borderColor: '#4caf50',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Buffalo Milk',
          data: data.buffalo,
          borderColor: '#2196f3',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Other Milk',
          data: data.other,
          borderColor: '#ff9800',
          fill: false,
          tension: 0.4,
        },
      ],
    };
  };

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: getChartData(),
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [filter]);

  // 🔽 Handle chart download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = `${filter}-milk-procurement-chart.png`;
    link.href = chartRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="procurement-dashboard">
      <div className="procurement-header">
        <h2>Monthly Milk Procurement Trend</h2>
        <div className="filter-buttons">
          <button
            onClick={() => setFilter('monthly')}
            style={{ backgroundColor: filter === 'monthly' ? '#0f172a' : '#1e3a8a' }}
          >
            Monthly
          </button>
          <button
            onClick={() => setFilter('weekly')}
            style={{ backgroundColor: filter === 'weekly' ? '#0f172a' : '#1e3a8a' }}
          >
            Weekly
          </button>
        </div>
      </div>

      <div className="chart-container">
        <canvas ref={chartRef}></canvas>
      </div>

      <div className="download-button">
        <button onClick={handleDownload}>Download Chart</button>
      </div>
    </div>
  );
};

export default MilkProcurementDashboard;