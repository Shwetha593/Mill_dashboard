import React from 'react';
import './QuickActions.css';

const actions = [
  { title: 'Create PO', icon: '📄', color: 'blue' },
  { title: 'Approve PO', icon: '✅', color: 'green', badge: 2 },
  { title: 'Track Orders', icon: '🔍', color: 'orange' },
  { title: 'Analytics', icon: '📊', color: 'purple' },
];

const QuickActions = () => {
  return (
    <div className="quick-actions-wrapper">
      <h2>⚡ Quick Actions</h2>
      <div className="quick-actions">
        {actions.map((action, idx) => (
          <div className={`card9 ${action.color}`} key={idx}>
            {action.badge && <div className="badge">{action.badge}</div>}
            <div className="card-icon">{action.icon}</div>
            <div className="card-title">{action.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;