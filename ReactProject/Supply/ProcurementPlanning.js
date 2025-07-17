import React from 'react';
import './ProcurementPlanning.css';

const data = [
  {
    title: 'Open POs',
    icon: '📂',
    value: '18',
    description: 'Value: ₹1.2L',
    change: '+3 from last week',
    changeType: 'improved',
    borderColor: 'border-blue',
  },
  {
    title: 'Pending Approvals',
    icon: '⏳',
    value: '5',
    description: 'Value: ₹1.8L',
    change: '-2 from last week',
    changeType: 'declined',
    borderColor: 'border-green',
  },
  {
    title: 'Avg. PO Cycle',
    icon: '⏱️',
    value: '4.5 days',
    description: '↓ 0.5 days',
    change: 'Improved',
    changeType: 'improved',
    borderColor: 'border-yellow',
  },
  {
    title: 'Cost Savings',
    icon: '💰',
    value: '₹1.2L',
    description: 'This month',
    change: '+15%',
    changeType: 'improved',
    borderColor: 'border-red',
  },
];

const ProcurementPlanning = () => {
  return (
    <div className="procurement-container">
      <div className="procurement-header">
       <h2> <i className="icon">🛒</i>
        Procurement Planning</h2>
      </div>
      <div className="procurement-cards">
        {data.map((card, index) => (
          <div key={index} className={`card11 ${card.borderColor}`}>
            <h3><i>{card.icon}</i> {card.title}</h3>
            <p>{card.value}</p>
            <span>
              {card.description}
              <br />
              <span className={card.changeType}>{card.change}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcurementPlanning;