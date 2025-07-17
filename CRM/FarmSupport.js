import React, { useState } from 'react';
import './FarmSupport.css';
import { FaTrash } from 'react-icons/fa';

const issueOptions = ['Milk Testing', 'Equipment Repair', 'Feed Supply'];
const priorityOptions = ['Medium', 'High', 'Low'];
const statusOptions = ['Open', 'In Progress', 'Resolved'];

const FarmSupport = () => {
  const [tickets, setTickets] = useState([
    {
      id: '#DFT1001',
      farmer: 'Anjali',
      issueType: 'Milk Testing',
      priority: 'Medium',
      dateOpened: '2025-04-10',
      status: 'Open',
    },
    {
      id: '#DFT1002',
      farmer: 'Raju',
      issueType: 'Equipment Repair',
      priority: 'High',
      dateOpened: '2025-04-12',
      status: 'In Progress',
    },
    {
      id: '#DFT1003',
      farmer: 'Mahesh',
      issueType: 'Feed Supply',
      priority: 'Low',
      dateOpened: '2025-04-15',
      status: 'Resolved',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    farmer: '',
    issueType: '',
    priority: '',
    dateOpened: '',
    status: '',
  });
  const [errors, setErrors] = useState({});
  const [deleteId, setDeleteId] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!/^[A-Za-z ]{3,}$/.test(form.farmer)) {
      formErrors.farmer = 'Name should be at least 3 letters.';
    }
    if (!form.issueType) formErrors.issueType = 'Required';
    if (!form.priority) formErrors.priority = 'Required';
    if (!form.dateOpened) formErrors.dateOpened = 'Required';
    if (!form.status) formErrors.status = 'Required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleAddTicket = () => {
    if (!validateForm()) return;
    const newTicket = {
      id: `#DFT${Math.floor(1000 + Math.random() * 9000)}`,
      ...form,
    };
    setTickets([...tickets, newTicket]);
    setForm({ farmer: '', issueType: '', priority: '', dateOpened: '', status: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="farm-support">
      <div className="header">
        <h2>Farm Support</h2>
        <button className="new-ticket-btn" onClick={() => setShowForm(true)}>+ New Ticket</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Farmer</th>
            <th>Issue Type</th>
            <th>Priority</th>
            <th>Date Opened</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.farmer}</td>
              <td>{ticket.issueType}</td>
              <td>
                <span className={`priority-$
                    {ticket.priority.toLowerCase()}`}>
                        {ticket.priority}</span>
                        </td>
              <td>{ticket.dateOpened}</td>
              <td><span className={`status-${ticket.status.replace(/\s+/g,'').toLowerCase()}`}>{ticket.status}</span></td>
              <td>
                <button className="delete-btn" onClick={() => setDeleteId(ticket.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Centered Modal for New Ticket */}
      {showForm && (
        <div className="modal">
          <div className="modal-content wide">
            <div className="modal-header">
              <h3>New Ticket</h3>
              
            </div>

            <div className="modal-body">
              <input
                type="text"
                name="farmer"
                placeholder="Farmer Name"
                value={form.farmer}
                onChange={handleInputChange}
              />
              {errors.farmer && <span className="error">{errors.farmer}</span>}

              <select name="issueType" value={form.issueType} onChange={handleInputChange}>
                <option value="">Select Issue Type</option>
                {issueOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              {errors.issueType && <span className="error">{errors.issueType}</span>}

              <select name="priority" value={form.priority} onChange={handleInputChange}>
                <option value="">Select Priority</option>
                {priorityOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              {errors.priority && <span className="error">{errors.priority}</span>}

              <input
                type="date"
                name="dateOpened"
                value={form.dateOpened}
                onChange={handleInputChange}
              />
              {errors.dateOpened && <span className="error">{errors.dateOpened}</span>}

              <select name="status" value={form.status} onChange={handleInputChange}>
                <option value="">Select Status</option>
                {statusOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              {errors.status && <span className="error">{errors.status}</span>}
            </div>

            <div className="modal-actions">
              <button onClick={handleAddTicket}>Submit</button>
              <button className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this ticket?</p>
            <div className="modal-actions">
              <button onClick={() => handleDelete(deleteId)}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setDeleteId(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmSupport;