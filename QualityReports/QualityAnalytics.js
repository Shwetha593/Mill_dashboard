import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './QualityAnalytics.css';
import { FaVial, FaFlask, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const QualityAnalytics = () => {
  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const doughnutChartInstance = useRef(null);

  useEffect(() => {
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();

       barChartInstance.current = new Chart(barChartRef.current, {
  type: 'bar', // ✅ MISSING
  data: {
    labels: ['Fat', 'SNF', 'Adulteration', 'Acidity', 'Protein', 'Lactose'],
    datasets: [
      {
        label: 'Quality Percentage',
        data: [92, 88, 5, 7, 85, 78],
        backgroundColor: '#3f51b5',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Milk Quality Parameters (Bar Chart)',
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage (%)',
        },
        ticks: {
          stepSize: 10,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Parameters',
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
  },
});

    doughnutChartInstance.current = new Chart(doughnutChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Approved', 'Rejected', 'Pending'],
        datasets: [
          {
            data: [68, 12, 20],
            backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: 'Test Result Distribution (Doughnut)' },
          legend: { position: 'bottom' },
        },
      },
    });
  }, []);

  return (
    <div className="dashboard33">
      <div className="header33"><h2>Quality Analytics </h2>
      </div>

      <div className="cards33">
        <div className="card33 green">
          <FaVial className="icon33" />
          <div>
            <h3>Tests Conducted</h3>
            <p>1,200</p>
          </div>
        </div>
        <div className="card33 blue">
          <FaFlask className="icon33" />
          <div>
            <h3>Passed</h3>
            <p>950</p>
          </div>
        </div>
        <div className="card33 orange">
          <FaCheckCircle className="icon33" />
          <div>
            <h3>Pending</h3>
            <p>180</p>
          </div>
        </div>
        <div className="card33 red">
          <FaExclamationTriangle className="icon33" />
          <div>
            <h3>Failed</h3>
            <p>70</p>
          </div>
        </div>
      </div>

      <div className="charts33">
        <div className="chart-card33">
          <canvas ref={barChartRef}></canvas>
        </div>
        <div className="chart-card33">
          <canvas ref={doughnutChartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default QualityAnalytics;