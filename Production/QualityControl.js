import React, { useState } from 'react';
import './QualityControl.css';

const testCards = [
  {
    title: 'Lab Tests',
    status: 'pass',
    items: ['Total Bacteria: 11,000 CFU/ml', 'Coliforms: Absent'],
  },
  {
    title: 'Chemical Composition',
    status: 'pass',
    items: ['Fat Content: 3.8%', 'Protein: 3.2%'],
  },
  {
    title: 'Physical Tests',
    status: 'warning',
    items: ['Acidity: 0.16%', 'Density: 1.028 g/ml'],
  },
  {
    title: 'Sensory Evaluation',
    status: 'pass',
    items: ['Flavor: Excellent', 'Appearance: Normal'],
  },
];

const reportCards = [
  {
    date: '2025-07-07',
    batch: 'BCH-1087',
    data: [
      {
        title: 'Lab Tests',
        status: 'pass',
        items: ['Total Bacteria: 10,500 CFU/ml', 'Coliforms: Absent'],
      },
      {
        title: 'Chemical Composition',
        status: 'pass',
        items: ['Fat Content: 3.9%', 'Protein: 3.3%'],
      },
      {
        title: 'Physical Tests',
        status: 'warning',
        items: ['Acidity: 0.17%', 'Density: 1.030 g/ml'],
      },
      {
        title: 'Sensory Evaluation',
        status: 'pass',
        items: ['Flavor: Good', 'Appearance: Normal'],
      },
    ],
  },
  {
    date: '2025-07-06',
    batch: 'BCH-1002',
    data: [
      {
        title: 'Lab Tests',
        status: 'pass',
        items: ['Total Bacteria: 10,800 CFU/ml', 'Coliforms: Absent'],
      },
      {
        title: 'Chemical Composition',
        status: 'pass',
        items: ['Fat Content: 3.7%', 'Protein: 3.1%'],
      },
      {
        title: 'Physical Tests',
        status: 'pass',
        items: ['Acidity: 0.15%', 'Density: 1.026 g/ml'],
      },
      {
        title: 'Sensory Evaluation',
        status: 'pass',
        items: ['Flavor: Excellent', 'Appearance: Normal'],
      },
    ],
  },
];

const QualityControl = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="qc-container">
      <div className="qc-header">
        <h2>Quality Control</h2>
        <button onClick={openModal}>Test Report</button>
      </div>

      <div className="qc-section">
        {testCards.map((card, index) => (
          <div className={`qc-box ${card.status}`} key={index}>
            <h4>{card.title}</h4>
            <div className={`status ${card.status}`}>
              {card.status === 'pass' && '✓ Passed'}
              {card.status === 'warning' && '! Warning'}
              {card.status === 'fail' && '✗ Failed'}
            </div>
            {card.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="qc-modal-overlay">
          <div className="qc-modal">
            <button className="qc-close-btn" onClick={closeModal}>×</button>
            {reportCards.map((report, idx) => (
              <div key={idx} className="qc-report-block">
                <h3 className="test-title">
                  Report - {report.date} | Batch #{report.batch}
                </h3>
                <div className="qc-section">
                  {report.data.map((card, index) => (
                    <div className={`qc-box ${card.status}`} key={index}>
                      <h4>{card.title}</h4>
                      <div className={`status ${card.status}`}>
                        {card.status === 'pass' && '✓ Passed'}
                        {card.status === 'warning' && '! Warning'}
                        {card.status === 'fail' && '✗ Failed'}
                      </div>
                      {card.items.map((item, idx2) => (
                        <p key={idx2}>{item}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityControl;