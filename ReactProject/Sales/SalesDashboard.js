import React, { useState, useEffect } from 'react';
import './SalesDashboard.css';

const salesData = {
  daily: [
    { title: "Today's Revenue", value: "₹15,200", change: "↑ 3%", trend: "up", color: "#3cb371", icon: "📈" },
    { title: "Litres Sold", value: "1,500 L", change: "↑ 1%", trend: "up", color: "#ee82ee", icon: "🧪" },
    { title: "Litres Filled", value: "1,200 L", change: "↑ 5%", trend: "up", color: "#ffa500", icon: "⛽" },
    { title: "Retail Shops", value: "156", change: "→ 0%", trend: "", color: "#6a5acd", icon: "🏪" },
  ],
  weekly: [
    { title: "Weekly Revenue", value: "₹98,000", change: "↑ 7%", trend: "up", color: "#3cb371", icon: "📊" },
    { title: "Litres Sold", value: "9,200 L", change: "↑ 6%", trend: "up", color: "#ee82ee", icon: "🧪" },
    { title: "Litres Filled", value: "7,800 L", change: "↑ 4%", trend: "up", color: "#ffa500", icon: "⛽" },
    { title: "Retail Shops", value: "154", change: "↓ 1%", trend: "down", color: "#6a5acd", icon: "🏪" },
  ],
  monthly: [
    { title: "Monthly Revenue", value: "₹4,75,000", change: "↑ 11%", trend: "up", color: "#3cb371", icon: "📈" },
    { title: "Litres Sold", value: "48,200 L", change: "↑ 8%", trend: "up", color: "#ee82ee", icon: "🧪" },
    { title: "Litres Filled", value: "38,200 L", change: "↑ 20%", trend: "up", color: "#ffa500", icon: "⛽" },
    { title: "Retail Shops", value: "156", change: "↓ 2%", trend: "down", color: "#6a5acd", icon: "🏪" },
  ]
};

const SalesDashboard = () => {
  const [period, setPeriod] = useState('daily');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(salesData[period]);
  }, [period]);

  return (
    <div className="dashboard2">
      <div className="top-bar">
        <h2>Sales & Marketing Dashboard</h2>
        <div className="calendar-box">
          <input type="date" defaultValue="2025-04-01" />
        </div>
      </div>

      <div className="section-header">
        <div className="section-title">📊 Sales Performance</div>
        <div className="filter-tabs">
          {['daily', 'weekly', 'monthly'].map((type) => (
            <button
              key={type}
              className={type === period ? 'active' : ''}
              onClick={() => setPeriod(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="cardss">
        
    {cards.map((card, index) => (
  <div
    className="card2"
    key={index}
    style={{ borderLeft: `6px solid ${card.color}` }}
  >
    
    <div className="card2-icon" style={{ backgroundColor: card.color }}>
      {card.icon}
    </div>
    <div className="card2-content">
      <div className="card2-title">{card.title}</div>
      <div className="card2-value">{card.value}</div>
      <div className={`card2-change ${card.trend}`}>{card.change}</div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default SalesDashboard;