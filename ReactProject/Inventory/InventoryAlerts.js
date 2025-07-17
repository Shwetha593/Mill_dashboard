import React from 'react';
import './InventoryAlerts.css';

const AlertCard = ({ type, icon, title, desc, buttonText }) => {
  return (
    <div className={`alert-card ${type}`}>
      <div className="icon-bg">{icon}</div>
      <div className="alert-title">{title}</div>
      <div className="alert-desc">{desc}</div>
      <button>{buttonText}</button>
    </div>
  );
};

const InventoryAlerts = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <span>🔔 Inventory Alerts</span>
        <div className="manage-btn">Manage Alerts</div>
      </div>

      <div className="alerts">
        <AlertCard
          type="critical"
          icon="☠️"
          title="Cattle Feed Critical"
          desc="Only 250kg remaining (5% stock)"
          buttonText="New Stock"
        />
        <AlertCard
          type="warning"
          icon="⏰"
          title="Milk Batch Expiring"
          desc="Batch MILK-0424-02 expiring in hours"
          buttonText="Process Now"
        />
        <AlertCard
          type="error"
          icon="⚠️"
          title="Refrigeration Unit Fault"
          desc="Unit #4 temperature critical. Immediate action required."
          buttonText="Send Technician"
        />
        <AlertCard
          type="info"
          icon="📦"
          title="Packaging Material Low"
          desc="Stock will last only 7 days usage"
          buttonText="Create PO"
        />
      </div>
    </div>
  );
};

export default InventoryAlerts;