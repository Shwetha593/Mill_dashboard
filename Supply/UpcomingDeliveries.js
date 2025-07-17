import React from 'react';
import './UpcomingDeliveries.css';

const deliveries = [
  {
    date: 'Today',
    company: 'AgroFeeds Ltd.',
    details: 'Organic Cattle Feed (500kg)',
    status: 'On Time',
    statusClass: 'on-time'
  },
  {
    date: 'Tomorrow',
    company: 'PackWell Industries',
    details: '1L Milk Pouches (10,000 units)',
    status: 'On Time',
    statusClass: 'on-time'
  },
  {
    date: 'May 2',
    company: 'DairyTech',
    details: 'Milking Machine Filters (100 units)',
    status: 'Delayed',
    statusClass: 'delayed'
  }
];

const UpcomingDeliveries = () => {
  return (
    <div className="delivery-card">
      <div className="delivery-title">Upcoming Deliveries</div>
      {deliveries.map((entry, index) => (
        <div className="timeline-entry" key={index}>
          <div className="timeline-line">
            <div className="circle"></div>
          </div>
          <div className="entry-box">
            <div className="left-column">{entry.date}</div>
            <div className="right-content">
              <div className="company">{entry.company}</div>
              <div className="details">{entry.details}</div>
            </div>
            <div className={`status ${entry.statusClass}`}>{entry.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingDeliveries;