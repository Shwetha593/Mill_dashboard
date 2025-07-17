import React, { useState } from 'react';
import './QualityAlerts.css';

const alertsData = [
  {
    title: 'Temperature Deviation',
    icon: '🌡️',
    details: `
      <p><strong>Location:</strong> Storage Unit #3</p>
      <p><strong>Time:</strong> 06:45 AM</p>
      <p><strong>Recorded Temp:</strong> 7.2°C</p>
      <p><strong>Threshold:</strong> 6.0°C</p>
      <p><strong>Status:</strong> Under Investigation</p>
    `,
    info: [
      'Detected in Storage Unit #3 at 06:45 AM',
      '**Recorded:** 7.2°C    **Threshold:** 6.0°C'
    ],
    status: 'UNDER INVESTIGATION',
    statusClass: 'under-investigation',
    critical: false
  },
  {
    title: 'Contamination Risk',
    icon: '🧪',
    details: `
      <p><strong>Batch:</strong> Milk Batch #0421</p>
      <p><strong>Issue:</strong> High bacterial count</p>
      <p><strong>Action Taken:</strong> Isolated for further testing</p>
      <p><strong>Status:</strong> Critical</p>
    `,
    info: [
      'Milk Batch #0421 flagged for recheck',
      '**Issue:** Bacterial count above threshold',
      '**Action:** Batch isolated for testing'
    ],
    status: 'CRITICAL',
    statusClass: 'critical-status',
    critical: true
  }
];

const QualityAlerts = () => {
  const [alerts, setAlerts] = useState(alertsData);
  const [detailModal, setDetailModal] = useState({ open: false, title: '', content: '' });
  const [dismissModal, setDismissModal] = useState({ open: false, alertToDismiss: null });

  const showDetailModal = (title, content) => {
    setDetailModal({ open: true, title, content });
  };

  const confirmDismiss = (index) => {
    setDismissModal({ open: true, alertToDismiss: index });
  };

  const handleDismiss = () => {
    if (dismissModal.alertToDismiss !== null) {
      setAlerts(prev => prev.filter((_, i) => i !== dismissModal.alertToDismiss));
    }
    setDismissModal({ open: false, alertToDismiss: null });
  };

  return (
    <div className="dashboard-alerts">
      <h2>🔔 Quality Alerts</h2>
      {alerts.map((alert, index) => (
        <div className={`alert ${alert.critical ? 'critical' : ''}`} key={index}>
          <div className="icon">{alert.icon}</div>
          <div className="alert-details">
            <div className="alert-title">{alert.title}</div>
            {alert.info.map((line, i) => (
              <div
                className="alert-info"
                key={i}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
            <div className="alert-buttons">
              <button className="view" onClick={() => showDetailModal(alert.title, alert.details)}>View Details</button>
              <button className="dismiss" onClick={() => confirmDismiss(index)}>Dismiss</button>
            </div>
          </div>
          <div className={`status-tag ${alert.statusClass}`}>{alert.status}</div>
        </div>
      ))}

      {detailModal.open && (
        <div className="modal" onClick={() => setDetailModal({ open: false, title: '', content: '' })}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setDetailModal({ open: false, title: '', content: '' })}>&times;</span>
            <h3>{detailModal.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: detailModal.content }} />
            <div className="modal-buttons">
              <button className="cancel" onClick={() => setDetailModal({ open: false, title: '', content: '' })}>Close</button>
            </div>
          </div>
        </div>
      )}

      {dismissModal.open && (
        <div className="modal" onClick={() => setDismissModal({ open: false, alertToDismiss: null })}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setDismissModal({ open: false, alertToDismiss: null })}>&times;</span>
            <h3>Are you sure?</h3>
            <p>Are you sure you want to dismiss the "{alerts[dismissModal.alertToDismiss]?.title}" alert?</p>
            <div className="modal-buttons">
              <button className="save" onClick={handleDismiss}>Yes</button>
              <button className="cancel" onClick={() => setDismissModal({ open: false, alertToDismiss: null })}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityAlerts;