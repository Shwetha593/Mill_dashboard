import React, { useState } from 'react';
import './FundingDashboard.css';

const FundingDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <div className="dashboard-container">
      {/* Total Funding Card */}
      <div className="dashboard-card funding-card">
        <h4>🔵 Total Funding</h4>
        <h2>₹2.55 Cr</h2>
      </div>

      {/* Upcoming Payments Card */}
      <div className="dashboard-card payment-card">
        <h4>🔵 Upcoming Payments</h4>

        <div className="payment-item">
          <div className="payment-amount">₹1,25,000</div>
          <div className="payment-info">
            15 May 2025<br />
            SBI Loan Installment
          </div>
        </div>

        <div className="payment-item">
          <div className="payment-amount">₹78,500</div>
          <div className="payment-info">
            10 May 2025<br />
            HDFC Equipment Loan
          </div>
        </div>

        <div className="payment-item">
          <div className="payment-amount">
            <span className="icon-lock" />
          </div>
          <div className="payment-info">
            30 Jun 2025<br />
            NABARD Progress Report
          </div>
        </div>

        <div className="view-all-btn" onClick={handleOpenModal}>
          View All Payments
        </div>
      </div>

      {/* Modal Popup */}
      {isModalVisible && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>All Payments</h3>
            <div className="modal-entry">
              <strong>Amount:</strong> ₹1,25,000<br />
              <strong>Date:</strong> 15 May 2025<br />
              <strong>Bank:</strong> SBI Loan Installment
            </div>
            <div className="modal-entry">
              <strong>Amount:</strong> ₹78,500<br />
              <strong>Date:</strong> 10 May 2025<br />
              <strong>Bank:</strong> HDFC Equipment Loan
            </div>
            <div className="modal-entry">
              <strong>Date:</strong> 30 Jun 2025<br />
              <strong>Bank:</strong> NABARD Progress Report 🔒
            </div>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundingDashboard;
