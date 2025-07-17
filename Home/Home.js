// src/components/Home/Home.js
import React from 'react';

// Import MetricCard from the parent 'components' directory
import MetricCard from '../MetricCard';

// Import other widgets from the same 'Home' directory
import MilkProductionDashboard from './MilkProductionDashboard';
import RecentOrdersTable from './RecentOrdersTable';
import Quickinsight from './Quickinsight';
import TaskRemainder from './TaskRemainder';
import TopPerformer from './TopPerformer'
import RecentActivities from './RecentActivities';

import './Home.css';


// Import Font Awesome icons
import {
  FaBoxes,
  FaDollarSign,
  FaUsers,
  FaTruck,
  FaChartLine,
  FaUserFriends,
  FaBullseye,
  FaSkullCrossbones
} from 'react-icons/fa';

// Import the consolidated CSS for the Home component




function Home() {
  return (
    <div className="home-container"> {/* This is the main grid container for the entire Home page */}

      {/* 1. METRIC CARDS SECTION */}
      <MetricCard
        icon={<FaBoxes />}
        title="TOTAL MILK"
        value="45,200 L"
        change="12.5%"
        changeType="increase"
      />
      <MetricCard
        icon={<FaDollarSign />}
        title="TOTAL SALES"
        value="₹2,500,000"
        change="18.2%"
        changeType="increase"
      />
      <MetricCard
        icon={<FaUsers />}
        title="NUMBER OF FARMERS"
        value="9,000+"
        change="5.7%"
        changeType="increase"
      />
      <MetricCard
        icon={<FaTruck />}
        title="DISTRIBUTORS"
        value="1,800"
        change="8.3%"
        changeType="increase"
      />
      <MetricCard
        icon={<FaChartLine />}
        title="GROWTH RATE"
        value="18.0%"
        changeType="increase"
      />
      <MetricCard
        icon={<FaUserFriends />}
        title="EMPLOYEE MANAGEMENT"
        value="79%"
        change="2.1%"
        changeType="increase"
      />
      <MetricCard
        icon={<FaBullseye />}
        title="TARGET ACHIEVEMENT"
        value="92%"
        change="5% above target"
        changeType="info"
      />
      <MetricCard
        icon={<FaSkullCrossbones />}
        title="QUALITY ALERTS"
        value="12"
        changeType="none"
      />

      {/* 2. MILK PRODUCTION DASHBOARD (Contains all 4 charts and its modal) */}
      {/* The 'full-width-section' class helps MilkProductionDashboard span across grid columns */}
      <div className="full-width-section">
        <MilkProductionDashboard />
      </div>
        
        <div className="graph-report-section">
            <RecentOrdersTable/>
        </div>
       
       <div className="full-width-section">
            <Quickinsight/>
        </div>

       <div className="full-width-section">
            <TaskRemainder/>
        </div>
       
       <div className="full-width-section">
            <TopPerformer/>
        </div>

         <div className="full-width-section">
            <RecentActivities/>
        </div>

        

    </div>
  );
}

export default Home;