import React, { useState } from "react";
import "./RecentTransaction.css";

const transactions = [
  {
    title: "Milk Sale",
    description: "April 2024 Production",
    date: "15 Apr 2024",
    amount: "+₹1,82,450",
    type: "credit",
    icon: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
  },
  {
    title: "Equipment Purchase",
    description: "Milking System",
    date: "10 Apr 2024",
    amount: "-₹12,50,000",
    type: "debit",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png",
  },
];

const RecentTransaction = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="recentTxnCard">
      <div className="recentTxnHeader">
        <span className="recentTxnTitle">🧾 Recent Transactions</span>
        <button className="recentTxnViewAll" onClick={() => setShowModal(true)}>
          View All &gt;
        </button>
      </div>

      {transactions.map((txn, index) => (
        <div className="recentTxnRow" key={index}>
          <div className="recentTxnLeft">
            <img className="recentTxnIcon" src={txn.icon} alt="icon" />
            <div className="recentTxnInfo">
              <div className="recentTxnMainTitle">{txn.title}</div>
              <div className="recentTxnSubtext">
                {txn.description}
                <br />
                {txn.date}
              </div>
            </div>
          </div>
          <div className={`recentTxnAmount ${txn.type}`}>
            {txn.amount}
          </div>
        </div>
      ))}

      {showModal && (
        <div className="txnModalOverlay" onClick={() => setShowModal(false)}>
          <div className="txnModalContent" onClick={(e) => e.stopPropagation()}>
            <h2 className="txnModalTitle">All Transactions</h2>
            <div className="txnModalList">
              {transactions.map((txn, index) => (
                <div className="txnModalItem" key={index}>
                  <strong>{txn.title}</strong>
                  <div>{txn.description}</div>
                  <div>Date: {txn.date}</div>
                  <div>Amount: {txn.amount}</div>
                </div>
              ))}
            </div>
            <button className="txnModalCloseBtn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentTransaction;