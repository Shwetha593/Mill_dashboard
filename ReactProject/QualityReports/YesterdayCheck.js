import React from 'react';
import './YesterdayCheck.css';
import { FaCheckCircle } from 'react-icons/fa';

const checks = [
  {
    title: 'Morning Batch Testing',
    time: 'Completed at 08:20 AM by Rina K.',
    status: 'ALL PARAMETERS NORMAL',
  },
  {
    title: 'Afternoon Batch Testing',
    time: 'Completed at 02:45 PM by Mohit S.',
    status: 'ALL PARAMETERS NORMAL',
  },
  {
    title: 'Evening Batch Cooling Audit',
    time: 'Completed at 07:15 PM by Alex J.',
    status: 'ALL PARAMETERS NORMAL',
  },
];

const YesterdayCheck = () => {
  return (
    <div className="yesterday-dashboard">
      <h2>Yesterday&apos;s Checks</h2>
      {checks.map((check, index) => (
        <div className="check-card" key={index}>
          <div className="check-icon">
            <FaCheckCircle />
          </div>
          <div className="check-info">
            <p className="check-title">{check.title}</p>
            <p className="check-time">{check.time}</p>
          </div>
          <div className="check-status">{check.status}</div>
        </div>
      ))}
    </div>
  );
};

export default YesterdayCheck;