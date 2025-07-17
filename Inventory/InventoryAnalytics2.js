import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './InventoryAnalytics2.css';

const InventoryAnalytics2= () => {
  const chartRef = useRef(null); // holds Chart instance
  const canvasRef = useRef(null); // holds canvas DOM node

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    // Destroy existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: 'Received',
            data: [900, 950, 875, 920, 980, 910, 905],
            borderColor: '#2196f3',
            backgroundColor: 'rgba(33, 150, 243, 0.15)',
            tension: 0.4,
            pointRadius: 4,
            fill: true,
          },
          {
            label: 'Used',
            data: [860, 880, 840, 910, 940, 900, 890],
            borderColor: '#e53935',
            backgroundColor: 'rgba(229, 57, 53, 0.15)',
            tension: 0.4,
            pointRadius: 4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
            },
          },
        },
        scales: {
          y: {
            min: 200,
            max: 1000,
            ticks: {
              stepSize: 200,
            },
            title: {
              display: true,
              text: 'Litres (L)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Days',
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="dashboard10">
      <div className="header">
        <span>📊 Inventory Analytics</span>
        <div className="dropdown">Last 30 Days ▼</div>
      </div>

      <div className="content">
        <div className="chart-container">
          <div className="chart-title">Raw Milk Usage Trend</div>
          <canvas ref={canvasRef}></canvas>
        </div>

        <div className="bar-container">
          <div className="bar-title">Inventory Turnover</div>
          <div className="turnover">5.2 Times/Month</div>

          <div className="bar-item">
            <div className="bar-label">
              <span>Raw Milk</span>
              <span>7.8x</span>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="bar-item">
            <div className="bar-label">
              <span>Finished Goods</span>
              <span>6.5x</span>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bar-item">
            <div className="bar-label">
              <span>Packaging</span>
              <span>4.2x</span>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryAnalytics2;