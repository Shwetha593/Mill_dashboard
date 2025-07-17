import React, { useState } from 'react';
import {
  FaHome, FaUsers, FaChartBar, FaTruck, FaIndustry,
  FaClipboardList, FaBoxes, FaMoneyBill, FaCog,
  FaUser, FaLock, FaSignOutAlt, FaBars
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onSectionChange, activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleSubmenu = () => {
    // Only toggle submenu when expanded
    if (isExpanded) {
      setSubmenuOpen(!submenuOpen);
    }
  };

  const sidebarItems = [
    { label: 'Home', icon: <FaHome />, section: 'home' },
    { label: 'CRM', icon: <FaUsers />, section: 'crm' },
    { label: 'Sales', icon: <FaChartBar />, section: 'sales' },
    { label: 'Supply', icon: <FaTruck />, section: 'supply' },
    { label: 'Production', icon: <FaIndustry />, section: 'production' },
    { label: 'Quality Reports', icon: <FaClipboardList />, section: 'quality' },
    { label: 'Inventory', icon: <FaBoxes />, section: 'inventory' },
    { label: 'Investment Statistics', icon: <FaMoneyBill />, section: 'investment' },
  ];

  const submenuItems = [
    { label: 'Account Settings', icon: <FaUser />, section: 'account' },
    { label: 'Privacy', icon: <FaLock />, section: 'privacy' },
    { label: 'Logout', icon: <FaSignOutAlt />, section: 'logout' },
  ];

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="top-section">
       
        <div className="toggle-btn" onClick={toggleSidebar}>
          {isExpanded ? '❮' : '❯'}
        </div>
      </div>

      <div className="sidebar-content">
        {sidebarItems.map((item) => (
          <div
            key={item.section}
            className={`sidebar-item ${activeSection === item.section ? 'active' : ''}`}
            onClick={() => onSectionChange(item.section)}
          >
            <div className="icon">{item.icon}</div>
            {isExpanded && <span className="label">{item.label}</span>}
          </div>
        ))}

        <div className="sidebar-item" onClick={toggleSubmenu}>
          <div className="icon"><FaCog /></div>
          {isExpanded && <span className="label">Settings</span>}
        </div>

        {/* Show submenu only if expanded and submenu is open */}
        {isExpanded && submenuOpen && (
          <div className="submenu">
            {submenuItems.map((item) => (
              <div
                key={item.section}
                className={`sidebar-subitem ${activeSection === item.section ? 'active' : ''}`}
                onClick={() => onSectionChange(item.section)}
                  >
                <div className="icon">{item.icon}</div>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;