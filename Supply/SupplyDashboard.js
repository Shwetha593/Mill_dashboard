import React, { useState } from "react";
import "./SupplyDashboard.css";

const supplyData = {
  Today: {
    incoming: { value: 12, status: "↑ 3 more than last week" },
    outgoing: { value: 28, status: "On schedule" },
    alerts: { value: 3, status: "Requires attention" },
    efficiency: { value: "94.2%", status: "↑ 2.1%" },
  },
  Weekly: {
    incoming: { value: 76, status: "↑ 5% from previous week" },
    outgoing: { value: 198, status: "Slight delay on 2 shipments" },
    alerts: { value: 8, status: "Investigating cause" },
    efficiency: { value: "91.6%", status: "↓ 1.3%" },
  },
  Monthly: {
    incoming: { value: 320, status: "↓ 2% from last month" },
    outgoing: { value: 814, status: "Stable" },
    alerts: { value: 21, status: "Trend improving" },
    efficiency: { value: "92.8%", status: "↑ 0.9%" },
  },
};

const SupplyDashboard = () => {
  const [period, setPeriod] = useState("Today");
  const data = supplyData[period];

  return (
    <div className="container4">
      <div className="dashboard4-header">Supply Chain Management</div>

      <div className="dashboard4-sub-header">
        <span>
          <i className="fas fa-network-wired"></i>{" "}
          Supply Chain Overview ({period})
        </span>
        <select onChange={(e) => setPeriod(e.target.value)} value={period}>
          <option value="Today">Today</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="cards4">
        <div className="card4 green-border">
          <h3>
            <i className="fas fa-truck-loading"></i> INCOMING SHIPMENTS
          </h3>
          <p>{data.incoming.value}</p>
          <div className="status green">{data.incoming.status}</div>
        </div>

        <div className="card4 blue-border">
          <h3>
            <i className="fas fa-truck"></i> OUTGOING DELIVERIES
          </h3>
          <p>{data.outgoing.value}</p>
          <div className="status blue">{data.outgoing.status}</div>
        </div>

        <div className="card4 red-border">
          <h3>
            <i className="fas fa-exclamation-triangle"></i> SUPPLY ALERTS
          </h3>
          <p>{data.alerts.value}</p>
          <div className="status red">{data.alerts.status}</div>
        </div>

        <div className="card4 green-border">
          <h3>
            <i className="fas fa-chart-line"></i> EFFICIENCY RATE
          </h3>
          <p>{data.efficiency.value}</p>
          <div className="status green">{data.efficiency.status}</div>
        </div>
      </div>
    </div>
  );
};

export default SupplyDashboard;