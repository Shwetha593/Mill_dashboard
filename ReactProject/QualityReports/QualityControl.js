import React from 'react';
import './QualityControl.css';

const QualityControl = () => {
  const cards = [
    {
      icon: '🧪',
      title: 'Milk Purity Level',
      value: '98.7%',
      note: '↑ 1.2% from last week',
      noteClass: 'green',
    },
    {
      icon: '🦠',
      title: 'Bacterial Count',
      value: '12 CFU/ml',
      note: '✔ Well below limit',
      noteClass: 'green',
    },
    {
      icon: '🌡️',
      title: 'Temperature Stability',
      value: '4.1°C',
      note: '✔ Within optimal range',
      noteClass: 'green',
    },
    {
      icon: '🥛',
      title: 'Fat Content',
      value: '3.8%',
      note: '✔ Premium grade',
      noteClass: 'green',
    },
  ];

  return (
    <div className="qc-dashboard-container">
      <h2 className="qc-title">Quality Control Dashboard</h2>
      <div className="qc-dashboard">
        {cards.map((card, idx) => (
          <div className="qc-card" key={idx}>
            <div className="qc-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <div className="qc-value">{card.value}</div>
            <div className={`qc-note ${card.noteClass}`}>{card.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityControl;