import React from 'react';
import './FleetManagement.css';
import { FaTruck, FaMapMarkerAlt, FaPhone, FaReceipt, FaSyncAlt } from 'react-icons/fa';

const fleetData = [
  {
    id: 'RT-0425-01',
    driver: 'Ramesh Kumar',
    vehicle: 'Refrigerated Van #5',
    stops: '4 stops',
    distance: '42 km',
    departure: '08:15 AM',
    eta: '11:30 AM',
    status: 'In Transit',
    statusType: 'in-transit',
    actions: [<FaMapMarkerAlt />, <FaPhone />, <FaReceipt />],
  },
  {
    id: 'RT-0425-02',
    driver: 'Suresh Patel',
    vehicle: 'Refrigerated Van #2',
    stops: '6 stops',
    distance: '38 km',
    departure: '07:30 AM',
    eta: '10:45 AM',
    status: 'Completed',
    statusType: 'completed',
    actions: [<FaMapMarkerAlt />, <FaPhone />, <FaReceipt />],
  },
  {
    id: 'RT-0425-03',
    driver: 'Anita Singh',
    vehicle: 'Refrigerated Van #8',
    stops: '5 stops',
    distance: '45 km',
    departure: '09:00 AM',
    eta: '12:30 PM',
    status: 'In Transit',
    statusType: 'in-transit',
    actions: [<FaMapMarkerAlt />, <FaPhone />, <FaReceipt />],
  },
];

const metrics = [
  { title: 'Vehicle Utilization', percent: 83, target: '85%', change: '↑ 2%', color: 'green' },
  { title: 'Maintenance Compliance', percent: 95, target: '100%', change: '↑ 5%', color: 'green' },
  { title: 'On-Time Delivery', percent: 91, target: '95%', change: '↓ 1%', color: 'red' },
  { title: 'Driver Performance', percent: 88, target: '90%', change: '↑ 3%', color: 'green' },
];

const FleetManagement = () => {
  return (
    <div className="fleet-container">
      <h2 className="fleet-title">Fleet Management</h2>

      <div className="metrics-row">
        {metrics.map((metric, index) => (
          <div className="metric-card" key={index}>
            <div className="metric-title">{metric.title}</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${metric.percent}%` }}></div>
            </div>
            <div className="metric-footer">
              <span>Target: {metric.target}</span>
              <span className={`change-text ${metric.color}`}>{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="table-container">
        <table className="fleet-table">
          <thead>
            <tr>
              <th>Route ID</th>
              <th>Driver</th>
              <th>Vehicle</th>
              <th>Stops</th>
              <th>Distance</th>
              <th>Departure</th>
              <th>ETA</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fleetData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.driver}</td>
                <td>{item.vehicle}</td>
                <td>{item.stops}</td>
                <td>{item.distance}</td>
                <td>{item.departure}</td>
                <td>{item.eta}</td>
                <td>
                  <span className={`status-badge ${item.statusType}`}>
                    {item.status}
                  </span>
                </td>
                <td className="actions">
                  {item.actions.map((icon, i) => (
                    <span key={i} className="action-icon">{icon}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FleetManagement;