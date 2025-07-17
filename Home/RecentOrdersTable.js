// src/components/Home/RecentOrdersTable.js
import React from 'react';
import { FaBell } from 'react-icons/fa'; // Importing the bell icon
import './RecentOrdersTable.css'; // Link to its CSS

const RecentOrdersTable = () => {
  // Sample data for the orders table
  const orders = [
    { id: '#ORD1023', shopName: 'Green Valley Dairy', status: 'Completed' },
    { id: '#ORD1024', shopName: 'Farm Fresh Milk', status: 'Completed' },
    { id: '#ORD1025', shopName: 'Daily Moo', status: 'Pending' },
    { id: '#ORD1026', shopName: 'Sunrise Farms', status: 'In Progress' },
    { id: '#ORD1027', shopName: 'Milk Masters', status: 'Completed' },
    { id: '#ORD1028', shopName: 'Fresh Dairy Co.', status: 'Pending' },
   
  ];

  const handleNotify = () => {
    console.log("Notification button clicked!");
    // In a real app, you would integrate a proper notification system here
    // or display a temporary message to the user.
    // Example: alert("Notification clicked!"); // (avoid alert() in Canvas for production apps)
  };

  // Helper function to get status class
  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'Pending': return 'status-pending';
      case 'In Progress': return 'status-in-progress';
      default: return '';
    }
  };

  return (
    <div className="recent-orders-card"> {/* Renamed from .container to be consistent with other cards */}
      <h3 className="card-title-recent-orders">
        <span className="icon-dot"></span> Recent Orders
      </h3>
      <div className="table-responsive"> {/* Add a responsive wrapper for the table */}
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>SHOP NAME</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.shopName}</td>
                <td className={`status ${getStatusClass(order.status)}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      
    </div>
  );
};

export default RecentOrdersTable;