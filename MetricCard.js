// src/MetricCard.js
import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // For the small arrow icons
import './MetricCard.css'; // Import the CSS for this component

function MetricCard({ icon, title, value, change, changeType }) {
  const getChangeIcon = () => {
    if (changeType === 'increase') {
      return <FaArrowUp className="arrow-icon increase" />;
    } else if (changeType === 'decrease') {
      return <FaArrowDown className="arrow-icon decrease" />;
    }
    return null; // No icon for 'info' or 'none' change types
  };

  return (
    <div className="metric-card">
      <div className="card-header">
        <div className="card-icon">{icon}</div> {/* Icon passed as a prop */}
        <div className="card-title">{title}</div>
      </div>
      <div className="card-value">{value}</div>
      {/* Conditionally render change text if 'change' prop exists */}
      {change && (
        <div className={`card-change ${changeType}`}>
          {getChangeIcon()} {change}
        </div>
      )}
    </div>
  );
}

export default MetricCard;