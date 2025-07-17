import React, { useState } from 'react';
import './LineStatus.css';
import {
  FaFilter,
  FaTemperatureLow,
  FaTint,
  FaBoxOpen,
  FaListAlt,
} from 'react-icons/fa';

const lineData = [
  {
    title: 'Filtration',
    icon: <FaFilter />,
    status: 'Operational',
    statusClass: 'green',
    details: ['Throughput: 1,200 L/hr', 'Quality: 99.2%'],
  },
  {
    title: 'Pasteurization',
    icon: <FaTemperatureLow />,
    status: 'Operational',
    statusClass: 'green',
    details: ['Temp: 72°C', 'Holding: 15 sec'],
  },
  {
    title: 'Homogenization',
    icon: <FaTint />,
    status: 'Maintenance',
    statusClass: 'orange',
    details: ['Pressure: 180 bar', 'Efficiency: 87%'],
  },
  {
    title: 'Packaging',
    icon: <FaBoxOpen />,
    status: 'Operational',
    statusClass: 'green',
    details: ['Speed: 120 pkg/min', 'Defects: 0.3%'],
  },
];

const LineStatus = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const generateReport = () => {
    setModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closeReport = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container5">
      <div className="header40">
        <FaListAlt style={{ marginRight: '10px', color: '#007bff' }} />
        Line Status
      </div>

      <button className="report-btn" onClick={generateReport}>
        Report
      </button>

      <div className="cards">
        {lineData.map((line, index) => (
          <div className="card25" key={index}>
            <h3>
              {line.icon} {line.title}
            </h3>
            <div className={`status ${line.statusClass}`}>
              ● {line.status}
            </div>
            <div className="details">
              {line.details.map((detail, i) => (
                <div key={i}>{detail}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div id="reportModal">
          <div className="modal-content">
            <h2>Line Status Report</h2>
            <div id="reportContent">
              {lineData.map((line, index) => (
                <div key={index}>
                  <strong>{line.title}</strong>
                  <br />
                  Status: {line.status}
                  <br />
                  Details: {line.details.join(', ')}
                  <br />
                  <br />
                </div>
              ))}
            </div>
            <button onClick={closeReport}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LineStatus;