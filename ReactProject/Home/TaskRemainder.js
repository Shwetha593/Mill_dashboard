import React from 'react';
import './TaskRemainder.css';
import { FaBell } from 'react-icons/fa';

const Dashboard0 = () => {
  const stats = [
    { title: 'Avg. Processing Time', value: '4.8 hrs' },
    { title: 'Pending Orders', value: '24' },
    { title: 'New Tickets', value: '7' },
    { title: 'Feedback Rating', value: '4.6/5 ★' },
  ];

  const tasks = [
    'Inspect Storage Unit 5',
    'Review Quality Reports',
    'Update Farmer Contact List',
    'Schedule Distributor Meeting',
    'Verify Payment Transactions',
  ];

  const handleNotify = () => {
    alert("Reminder bell clicked!");
  };

  return (
    <div className="container">
      <div className="stats">
        {stats.map((item, idx) => (
          <div className="card0" key={idx}>
            <h4>{item.title}</h4>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="section-title">
        <span className="icon-dot"></span> Task Reminders
      </div>

      {tasks.map((task, idx) => (
        <div className="task" key={idx}>
          <div className="task-icon"></div>
          {task}
        </div>
      ))}
    </div>
  );
};

export default Dashboard0;