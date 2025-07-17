// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="admin-header">
      <div className="logo-section">
      <div className="company-text">
  <span className="blue-part">ASTR</span>
  <span className="red-part">O</span>
  <span className="black-part">LITE</span>
</div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>

      <div className="search-section">
        <input type="text" placeholder="Search sections..." />
      </div>

      <div className="user-section">
        <i className="fas fa-moon" title="Dark Mode"></i>
        <i className="fas fa-globe" title="Change Language"></i>
        <div className="profile-info">
          <img src="/profile.png" alt="Profile" className="profile-pic" />
          <span className="user-name">Shwetha</span>
        </div>
      </div>
    </header>
  );
};

export default Header;