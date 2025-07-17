import React from 'react';
import './TopPerformer.css';

const TopPerformer = () => {
  const farmers = [
    { name: 'Arun Kumar', milk: '1,200', quality: '98%' },
    { name: 'Preeti Sharma', milk: '1,050', quality: '97%' },
    { name: 'Rahul Verma', milk: '980', quality: '96%' },
  ];

  return (
    <div className="top-performer-card">
      <div className="top-performer-title">
        <span className="top-performer-dot"></span> Top Performing Farmers
      </div>

      <table className="top-performer-table">
        <thead>
          <tr>
            <th className="left-align">NAME</th>
            <th className="right-align">MILK (LITRES)</th>
            <th className="right-align">QUALITY %</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer, index) => (
            <tr key={index}>
              <td className="left-align">{farmer.name}</td>
              <td className="right-align">{farmer.milk}</td>
              <td className="right-align">{farmer.quality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPerformer;
