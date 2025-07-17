import React, { useState } from 'react';
import './QualityCheck.css';

const QualityCheck = () => {
  const [selectedRange, setSelectedRange] = useState('Today');

  const scheduleItems = [
    {
      id: 1,
      title: 'Morning Batch Testing',
      sampleId: 'MKT-2025',
      status: 'completed',
      time: 'Completed at 08:15 AM by Alex J.',
    },
    {
      id: 2,
      title: 'Afternoon Batch Testing',
      status: 'pending',
      time: 'Scheduled for 02:30 PM',
    },
    {
      id: 3,
      title: 'Evening Batch Cooling Audit',
      status: 'pending',
      time: 'Scheduled for 07:00 PM',
    },
  ];

  return (
    <div className="quality-container">
      <div className="quality-header">
        <h2>Quality Check Schedule</h2>
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option>Today</option>
          <option>Yesterday</option>
          <option>Last Week</option>
        </select>
      </div>

      <h4>{selectedRange}'s Schedule</h4>

      <div className="quality-checklist">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className={`quality-check-item ${item.status}`}
          >
            <div className="quality-left">
              <div className="quality-icon">
                {item.status === 'completed' ? '✅' : item.status === 'pending' ? '⏳' : '🕒'}
              </div>
              <div className="quality-info">
                <strong>{item.title}</strong>
                {item.sampleId && <small>Sample ID: {item.sampleId}</small>}
                <span className="quality-time">{item.time}</span>
              </div>
            </div>
            <div className={`quality-status ${item.status}`}>
              {item.status === 'completed' ? 'ALL PARAMETERS NORMAL' : 'PENDING'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityCheck;