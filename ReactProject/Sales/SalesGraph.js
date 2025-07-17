import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './SalesGraph.css';

const SalesGraph = () => {
  useEffect(() => {
    const productChart = new Chart(document.getElementById('productChart'), {
      type: 'bar',
      data: {
        labels: ['Milk', 'Yogurt', 'Cheese', 'Butter', 'Cream', 'Other'],
        datasets: [{
          label: 'Sales (₹)',
          data: [250000, 75000, 50000, 35000, 15000, 5000],
          backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#E91E63', '#9E9E9E']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => '₹' + value / 1000 + 'K'
            }
          }
        },
        plugins: {
          legend: { display: false }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });

    const regionChart = new Chart(document.getElementById('regionChart'), {
      type: 'doughnut',
      data: {
        labels: ['South', 'North', 'West', 'East', 'Central'],
        datasets: [{
          data: [35, 25, 20, 15, 5],
          backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F06292']
        }]
      },
      options: {
        plugins: {
          legend: { position: 'right' }
        },
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false
      }
    });

    return () => {
      productChart.destroy();
      regionChart.destroy();
    };
  }, []);

return (
  <div className="container6">
    <div className="card6">
      <h3>Sales by Product Category</h3>
      <canvas id="productChart"></canvas>
      <div className="note6">Milk products account for over 50% of total sales</div>
    </div>

    <div className="card6">
      <h3>Sales by Region</h3>
      <canvas id="regionChart"></canvas>
      <div className="note6">Southern region leads with 35% of total sales</div>
    </div>
  </div>
);
};

export default SalesGraph;