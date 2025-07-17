import React, { useState } from 'react';
import './QualityPerformance.css';

const ProgressRow = ({ label, percent, width }) => (
  <div className="qp-progress-row">
    <div className="qp-progress-label">{label}</div>
    <div className="qp-progress-bar-wrapper">
      <div className="qp-progress-bar-fill" style={{ width }}></div>
    </div>
    <div className="qp-progress-percent">{percent}</div>
  </div>
);

const StaffCard = ({ name, stars, rating, image }) => (
  <div className="qp-staff-card">
    <img src={image} alt={name} className="qp-staff-img" />
    <p className="qp-staff-name">{name}</p>
    <div className="qp-staff-stars">{stars}</div>
    <p className="qp-staff-rating">{rating}%</p>
  </div>
);

const QualityPerformance = () => {
  const [activeFilter, setActiveFilter] = useState('Weekly');

  const filters = ['Weekly', 'Monthly', 'Quarterly'];
  const staffList = [
    {
      name: 'Mohit S.',
      stars: '★★★★★',
      rating: 95,
      image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
      name: 'Alex J.',
      stars: '★★★★☆',
      rating: 92,
      image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
      name: 'Rina K.',
      stars: '★★★★☆',
      rating: 89,
      image: 'https://randomuser.me/api/portraits/women/29.jpg'
    }
  ];

  return (
    <div className="qp-dashboard">
      <div className="qp-container">
        <h2 className="qp-title">📊 Quality Performance</h2>

        <div className="qp-filter-buttons">
          {filters.map(label => (
            <button
              key={label}
              className={`qp-filter-btn ${activeFilter === label ? 'active' : ''}`}
              onClick={() => setActiveFilter(label)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="qp-grid">
          {/* Left Panel */}
          <div className="qp-card qp-quality-goals">
            <h3>Quality Goals Progress</h3>
            <hr />
            <div className="qp-target-info">
              <span>75% Complete</span>
              <span>Target: 90%</span>
            </div>
            <div className="qp-main-bar-wrapper">
              <div className="qp-main-bar-fill" style={{ width: '75%' }}></div>
            </div>

            <ProgressRow label="Purity Standards" percent="92%" width="72%" />
            <ProgressRow label="Safety Compliance" percent="88%" width="68%" />
            <ProgressRow label="Process Adherence" percent="78%" width="60%" />
          </div>

          {/* Right Panel */}
          <div className="qp-card qp-staff-performance">
            <h3>Staff Performance</h3>
            <hr />
            <div className="qp-staff-grid">
              {staffList.map((staff, index) => (
                <StaffCard key={index} {...staff} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityPerformance;