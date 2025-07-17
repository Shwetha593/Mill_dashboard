import React from 'react';
import './InventoryDashboard.css';

const InventoryDashboard = () => {
  return (
    <div className="container">
      <h2>Inventory Management</h2>
      <div className="controls">
        <div className="tab">📊 Overview</div>
      </div>

      <div className="cards">
        <div className="card high">
          <div className="card-icon">🥛</div>
          <div className="card-title">Raw Milk Stock</div>
          <div className="card-value">2,450L</div>
          <div className="card-footer">
            <div className="status high-stock">High Stock</div>
            <div className="trend-up">↑ 12%</div>
          </div>
        </div>

        <div className="card medium">
          <div className="card-icon">📦</div>
          <div className="card-title">Finished Products</div>
          <div className="card-value">1,850 Units</div>
          <div className="card-footer">
            <div className="status medium-stock">Medium</div>
            <div className="trend-down">↓ 5%</div>
          </div>
        </div>

        <div className="card low">
          <div className="card-icon">🌾</div>
          <div className="card-title">Cattle Feed</div>
          <div className="card-value">1,250 kg</div>
          <div className="card-footer">
            <div className="status low-stock">Low</div>
            <div className="trend-reorder">⚠ Reorder</div>
          </div>
        </div>

        <div className="card medium">
          <div className="card-icon">📦</div>
          <div className="card-title">Packaging Materials</div>
          <div className="card-value">5,200 Units</div>
          <div className="card-footer">
            <div className="status medium-stock">Medium</div>
            <div className="trend-up">↑ 8%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;