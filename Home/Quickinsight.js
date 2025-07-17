import React from "react";
import "./Quickinsight.css";
import { FaTint, FaRupeeSign, FaUserPlus, FaTruck } from "react-icons/fa";

const metrics = [
  {
    label: "Avg. Daily Milk",
    value: "8,450 L",
    change: "+4.2%",
    icon: <FaTint />,
  },
  {
    label: "Monthly Revenue",
    value: "₹3,20,000",
    change: "+6.8%",
    icon: <FaRupeeSign />,
  },
  {
    label: "New Farmers",
    value: "510",
    change: "+1.5%",
    icon: <FaUserPlus />,
  },
  {
    label: "On-time Deliveries",
    value: "97%",
    change: "-1.2%",
    icon: <FaTruck />,
  },
];

const Quickinsight = () => {
  return (
    <div className="dashboard-insight-card">
      <h3><span className="status-dot"></span>Quick Insights</h3>
      <table>
        <thead>
          <tr>
            <th>METRIC</th>
            <th>VALUE</th>
            <th>CHANGE</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index}>
              <td>
                <div className="metric-display">
                  <span className="icon">{metric.icon}</span>
                  {metric.label}
                </div>
              </td>
              <td className="metric-value">{metric.value}</td>
              <td
                className={`metric-change ${
                  metric.change.startsWith("-") ? "negative" : "positive"
                }`}
              >
                {metric.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Quickinsight;
