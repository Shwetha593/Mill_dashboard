import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Monthly.css';

const MonthlySales = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: 'This Year',
            data: [320000, 340000, 390000, 440000, 450000, 470000, 490000, 510000, 530000, 550000, 570000, 600000],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            fill: true,
            tension: 0.4,
            pointBorderColor: '#4CAF50',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5
          },
          {
            label: 'Last Year',
            data: [280000, 300000, 320000, 340000, 350000, 370000, 380000, 390000, 400000, 420000, 440000, 460000],
            borderColor: '#42A5F5',
            backgroundColor: 'rgba(66, 165, 245, 0.05)',
            fill: true,
            tension: 0.4,
            borderDash: [5, 5],
            pointBorderColor: '#42A5F5',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: value => '₹' + value / 1000 + 'K'
            },
            grid: {
              color: '#eee'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20
            }
          },
          tooltip: {
            callbacks: {
              label: context => `${context.dataset.label}: ₹${(context.parsed.y / 1000).toFixed(1)}K`
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, []);

  const downloadChart = () => {
    const link = document.createElement('a');
    link.download = 'monthly-sales-trend.png';
    link.href = chartInstance.toBase64Image();
    link.click();
  };

  const fullscreenChart = () => {
    const container = document.getElementById('monthlySalesCard');
    if (container.requestFullscreen) {
      container.requestFullscreen();
    }
  };

  return (
    <div className="monthly-sales-card" id="monthlySalesCard">
      <div className="monthly-sales-header">
        <h3>Monthly Sales</h3>
        <div className="monthly-sales-controls">
          <select>
            <option>This Year vs Last Year</option>
          </select>
          <button onClick={downloadChart} title="Download">&#8681;</button>
          <button onClick={fullscreenChart} title="Fullscreen">&#9974;</button>
        </div>
      </div>
      <canvas ref={chartRef} id="monthlySalesChart"></canvas>
    </div>
  );
};

export default MonthlySales;