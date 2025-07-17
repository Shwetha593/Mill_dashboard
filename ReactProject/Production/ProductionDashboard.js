import React, { useState } from 'react';
import './ProductionDashboard.css';
import { FaChartLine, FaTint, FaIndustry, FaTimesCircle } from 'react-icons/fa';

const ProductionDashboard = () => {
  const [selectedRange, setSelectedRange] = useState('today');

  const data = {
    today: {
      milk: { value: '2,450 L', subtext: '↑ 12% from yesterday' },
      efficiency: { value: '92%', subtext: 'Within target' },
      waste: { value: '28 L', subtext: '1.1% of total', red: true },
    },
    yesterday: {
      milk: { value: '2,200 L', subtext: '↓ 5% from day before' },
      efficiency: { value: '89%', subtext: 'Slightly below target' },
      waste: { value: '35 L', subtext: '1.6% of total', red: true },
    },
    week: {
      milk: { value: '16,800 L', subtext: '↑ 9% from last week' },
      efficiency: { value: '93%', subtext: 'Optimal range' },
      waste: { value: '215 L', subtext: '1.3% of total', red: true },
    },
  };

  const selected = data[selectedRange];

  return (
    <div className="dashboard23">
      <div className="header3">
        <h2><FaChartLine /> Overview and Analytics</h2>
        <select value={selectedRange} onChange={(e) => setSelectedRange(e.target.value)}>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="week">This Week</option>
        </select>
      </div>

      <div className="overview23">
        <div className="card23">
          <FaTint />
          <h3>Raw Milk Processed</h3>
          <div className="value23">{selected.milk.value}</div>
          <div className="subtext23">{selected.milk.subtext}</div>
        </div>

        <div className="card23">
          <FaIndustry />
          <h3>Production Efficiency</h3>
          <div className="value23">{selected.efficiency.value}</div>
          <div className="subtext23">{selected.efficiency.subtext}</div>
        </div>

        <div className="card23">
          <FaTimesCircle />
          <h3>Waste/Spillage</h3>
          <div className="value23">{selected.waste.value}</div>
          <div className={`subtext23 ${selected.waste.red ? 'red23' : ''}`}>
            {selected.waste.subtext}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionDashboard;