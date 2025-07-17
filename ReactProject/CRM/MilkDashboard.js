// src/components/MilkDashboard.js
import React from 'react';
import {
  Milk,
  CalendarDays,
  User,
  Droplet
} from 'lucide-react';
import './MilkDashboard.css';


const MilkDashboard = () => {
  const data = {
    todayCollection: 2142,
    todayChange: 8,
    weeklyAvg: 1965,
    weekChange: 5,
    topFarmer: "Mahesh",
    topVolume: 148,
    fatContent: 4.8
  };

  return (
    <div className="milk-dashboard">
      <h2>Milk Collection </h2>
      <div className="milk-cards">
        <div className="milk-card purple">
          <div className="card-header">
            <Milk className="card-icon" />
            <span className="card-title">TODAY'S COLLECTION</span>
          </div>
          <div className="card-value">{data.todayCollection} L</div>
          <div className="card-note">↑ {data.todayChange}% from yesterday</div>
        </div>

        <div className="milk-card blue">
          <div className="card-header">
            <CalendarDays className="card-icon" />
            <span className="card-title">THIS WEEK'S AVG.</span>
          </div>
          <div className="card-value">{data.weeklyAvg} L/day</div>
          <div className="card-note">↑ {data.weekChange}% from last week</div>
        </div>

        <div className="milk-card green">
          <div className="card-header">
            <User className="card-icon" />
            <span className="card-title">TOP FARMER TODAY</span>
          </div>
          <div className="card-value">{data.topFarmer}</div>
          <div className="card-note">{data.topVolume} L supplied</div>
        </div>

        <div className="milk-card orange">
          <div className="card-header">
            <Droplet className="card-icon" />
            <span className="card-title">AVG. FAT CONTENT</span>
          </div>
          <div className="card-value">{data.fatContent}%</div>
          <div className="card-note">Within ideal range</div>
        </div>
      </div>

   
    </div>
  );
};

export default MilkDashboard;