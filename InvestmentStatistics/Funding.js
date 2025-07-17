import React, { useState } from 'react';
import './Funding.css';

const initialSources = [
  {
    id: 1,
    type: 'Bank Loans',
    name: 'State Bank of India - Dairy Development Loan',
    principal: 7500000,
    interest: 7.5,
    tenure: 7,
    disbursement: '2023-01-15',
    nextPayment: 125000,
    nextPaymentDate: '2025-05-15',
    progress: 35,
  },
  {
    id: 2,
    type: 'Bank Loans',
    name: 'HDFC Bank - Equipment Financing',
    principal: 3500000,
    interest: 8.2,
    tenure: 5,
    disbursement: '2024-03-10',
    nextPayment: 78500,
    nextPaymentDate: '2025-05-10',
    progress: 12,
  },
  {
    id: 3,
    type: 'Government Schemes',
    name: 'NABARD - Dairy Entrepreneurship Development Scheme',
    principal: 2500000,
    schemeType: 'Capital Subsidy',
    approvalDate: '2023-12-05',
    deadline: '2025-12-05',
    reportDue: '2025-06-30',
    progress: 68,
    isSubsidy: true,
  },
  {
    id: 4,
    type: 'Private Investors',
    name: 'Agri Innovation Fund - Series B Investment',
    principal: 12000000,
    equityStake: 15,
    applicationDate: '2023-12-05',
    deadline: '2025-03-22',
    decisionDate: '2025-05-15',
    status: 'Due Diligence',
    progress: 68,
    isInvestor: true,
  },
];

function Funding() {
  const [sources, setSources] = useState(initialSources);
  const [activeTab, setActiveTab] = useState('All Sources');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedSource, setSelectedSource] = useState(null);
  const [newSource, setNewSource] = useState({
    name: '',
    principal: '',
    interest: '',
    tenure: '',
    disbursement: '',
    nextPayment: '',
    type: 'Bank Loans',
  });
  const [nameError, setNameError] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleAddSource = () => {
    if (!newSource.name || nameError) {
      setNameError('Name must be at least 3 alphabetic characters.');
      return;
    }

    const newEntry = {
      id: sources.length + 1,
      ...newSource,
      principal: Number(newSource.principal),
      interest: Number(newSource.interest),
      tenure: Number(newSource.tenure),
      nextPayment: Number(newSource.nextPayment),
      progress: 0,
    };
    setSources([...sources, newEntry]);
    setShowModal(false);
    setNewSource({
      name: '',
      principal: '',
      interest: '',
      tenure: '',
      disbursement: '',
      nextPayment: '',
      type: 'Bank Loans',
    });
    setNameError('');
  };

  const filteredSources =
    activeTab === 'All Sources'
      ? sources
      : sources.filter((s) => s.type === activeTab);

  return (
    <div className="Funding">
      <h2>🏦 Funding Sources</h2>

      <div className="add-source-bar">
        <button onClick={() => {
          setModalType('add');
          setShowModal(true);
        }}>
          + Add New Source
        </button>
      </div>

      <div className="tabs">
        {['All Sources', 'Bank Loans', 'Government Schemes', 'Private Investors'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cards90">
        {filteredSources.map((source) => (
          <div key={source.id} className="card90">
            <span className="status90">Active</span>
            <h4><i>🏦</i> {source.name}</h4>
            <div className="card-content">
              {source.isSubsidy ? (
                <>
                  <p>Subsidy Amount: <strong>₹{source.principal.toLocaleString()}</strong></p>
                  <p>Scheme Type: {source.schemeType}</p>
                  <p>Approval Date: {source.approvalDate}</p>
                  <p>Utilization Deadline: {source.deadline}</p>
                  <p>Next Report Due: {source.reportDue}</p>
                </>
              ) : source.isInvestor ? (
                <>
                  <p>Proposed Amount: <strong>₹{source.principal.toLocaleString()}</strong></p>
                  <p>Equity Stake: {source.equityStake}%</p>
                  <p>Application Date: {source.applicationDate}</p>
                  <p>Utilization Deadline: {source.deadline}</p>
                  <p>Decision Expected: {source.decisionDate}</p>
                  <p>Status: {source.status}</p>
                </>
              ) : (
                <>
                  <p>Principal Amount: <strong>₹{source.principal.toLocaleString()}</strong></p>
                  <p>Interest Rate: {source.interest}% p.a.</p>
                  <p>Tenure: {source.tenure} years</p>
                  <p>Disbursement Date: {source.disbursement}</p>
                  <p>Next Payment: <strong>₹{source.nextPayment.toLocaleString()}</strong> ({source.nextPaymentDate})</p>
                </>
              )}
              <p>{source.isSubsidy || source.isInvestor ? 'Fund Utilization:' : 'Repayment Progress:'}</p>
              <div className="progress-bar90">
                <div className="progress90" style={{ width: `${source.progress}%`, backgroundColor: source.isSubsidy || source.isInvestor ? '#009688' : '#3f51b5' }}></div>
              </div>
            </div>
            <div className="card-actions">
              <button onClick={() => {
                setSelectedSource(source);
                setModalType('details');
                setShowModal(true);
              }}>
                View Details
              </button>
              {source.isSubsidy || source.isInvestor ? (
                <button onClick={() => {
                  setSelectedSource(source);
                  setModalType('report');
                  setShowModal(true);
                }}>Submit Report</button>
              ) : (
                <button onClick={() => {
                  setSelectedSource(source);
                  setModalType('payment');
                  setShowModal(true);
                }}>Make Payment</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal90" onClick={() => setShowModal(false)}>
          <div className="modal-content90" onClick={(e) => e.stopPropagation()}>
            {modalType === 'add' && (
              <>
                <h3>Add New Funding Source</h3>
                <label>Funding Source Name</label>
                <input
                  value={newSource.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewSource({ ...newSource, name: value });

                    if (!/^[A-Za-z ]{3,}$/.test(value)) {
                      setNameError('Name must be at least 3 alphabetic characters.');
                    } else {
                      setNameError('');
                    }
                  }}
                />
                {nameError && <p className="error-msg">{nameError}</p>}

                <label>Principal Amount (₹)</label>
                <input type="number" value={newSource.principal} onChange={(e) => setNewSource({ ...newSource, principal: e.target.value })} />

                <label>Interest Rate (% p.a.)</label>
                <input type="number" step="0.01" value={newSource.interest} onChange={(e) => setNewSource({ ...newSource, interest: e.target.value })} />

                <label>Tenure (Years)</label>
                <input type="number" value={newSource.tenure} onChange={(e) => setNewSource({ ...newSource, tenure: e.target.value })} />

                <label>Disbursement Date</label>
                <input type="date" value={newSource.disbursement} onChange={(e) => setNewSource({ ...newSource, disbursement: e.target.value })} />

                <label>Next Payment Amount (₹)</label>
                <input type="number" value={newSource.nextPayment} onChange={(e) => setNewSource({ ...newSource, nextPayment: e.target.value })} />

                <label>Funding Type</label>
                <select value={newSource.type} onChange={(e) => setNewSource({ ...newSource, type: e.target.value })}>
                  <option>Bank Loans</option>
                  <option>Government Schemes</option>
                  <option>Private Investors</option>
                </select>

                <div className="modal-actions">
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                  <button onClick={handleAddSource}>Add Source</button>
                </div>
              </>
            )}

            {modalType === 'details' && selectedSource && (
              <>
                <h3>Funding Source Details</h3>
                <p><strong>Name:</strong> {selectedSource.name}</p>
                <p><strong>Type:</strong> {selectedSource.type}</p>
                <p><strong>Principal:</strong> ₹{selectedSource.principal.toLocaleString()}</p>
                {selectedSource.interest && <p><strong>Interest:</strong> {selectedSource.interest}%</p>}
                {selectedSource.tenure && <p><strong>Tenure:</strong> {selectedSource.tenure} years</p>}
                <div className="modal-actions">
                  <button onClick={() => setShowModal(false)}>Close</button>
                </div>
              </>
            )}

            {modalType === 'payment' && selectedSource && (
              <>
                <h3>Make Payment</h3>
                <p><strong>Bank:</strong> {selectedSource.name}</p>
                <p><strong>Amount:</strong> ₹{selectedSource.nextPayment.toLocaleString()}</p>
                <div className="modal-actions">
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                  <button onClick={() => {
                    setShowModal(false);
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                  }}>Submit</button>
                </div>
              </>
            )}

            {modalType === 'report' && selectedSource && (
              <>
                <h3>Submit Report</h3>
                <p>Are you sure you want to submit the report for <strong>{selectedSource.name}</strong>?</p>
                <div className="modal-actions">
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                  <button onClick={() => {
                    alert('Report submitted!');
                    setShowModal(false);
                  }}>Submit</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Toast Message */}
      {showToast && (
        <div className="toast-success">✅ Payment Done</div>
      )}
    </div>
  );
}

export default Funding;
