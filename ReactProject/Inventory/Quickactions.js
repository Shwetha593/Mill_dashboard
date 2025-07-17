import React from "react";
import "./Quickactions.css";

const Quickactions = () => {
  return (
    <div className="dashboard-container40">
      <div className="header40">
        Quick Actions{" "}
        <span className="subtext40">
          Frequently used inventory operations
        </span>
      </div>
      <div className="quick-actions40">
        <div className="card40">
          <div className="card-icon40 receive40">📦</div>
          <div className="card-title40">Receive Delivery</div>
          <div className="card-desc40">Process incoming inventory</div>
        </div>
        <div className="card40">
          <div className="card-icon40 transfer40">🔄</div>
          <div className="card-title40">Stock Transfer</div>
          <div className="card-desc40">Move items between locations</div>
        </div>
        <div className="card40">
          <div className="card-icon40 count40">📋</div>
          <div className="card-title40">Physical Count</div>
          <div className="card-desc40">Verify actual inventory levels</div>
        </div>
        <div className="card40">
          <div className="card-icon40 reports40">📈</div>
          <div className="card-title40">Generate Reports</div>
          <div className="card-desc40">Create inventory analytics</div>
        </div>
        <div className="card40">
          <div className="card-icon40 returns40">↩️</div>
          <div className="card-title40">Manage Returns</div>
          <div className="card-desc40">Process product returns</div>
        </div>
      </div>
    </div>
  );
};

export default Quickactions;