import React, { useState } from 'react';
import './Customer.css';

const initialTickets = [
  {
    name: "Alex Harris",
    issue: "Feed supply delayed - cattle at risk.",
    phone: "+11 98765 43210",
    email: "harris@dairyfarm.com",
    location: "Indianapolis, USA",
    cattle: "120",
    tags: ["URGENT"],
  },
  {
    name: "John Merena",
    issue: "Awaiting veterinary report for livestock health check",
    phone: "+31 76543 21098",
    email: "john.c@organicdairy.co",
    location: "Dallas, USA",
    cattle: "150",
    tags: ["FOLLOW-UP"],
  },
  {
    name: "Dakota",
    issue: "CRM training scheduled for staff on April 15th",
    phone: "+81 65432 10987",
    email: "dakota.e@desaidairy.com",
    location: "Houston, USA",
    cattle: "12 staff",
    tags: ["RESOLVED"],
  },
  {
    name: "Dakota Holmes",
    issue: "Emergency livestock illness outbreak, requires on-site intervention.",
    phone: "+1 (555) 901-2345",
    email: "dakota.h@dairycare.com",
    location: "Texas, USA",
    cattle: "180",
    tags: ["URGENT"],
  }
];

const Customer = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [showModal, setShowModal] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [popupType, setPopupType] = useState(null); // reply or email
  const [messageSent, setMessageSent] = useState(false);

  const [newTicket, setNewTicket] = useState({
    name: '', issue: '', phone: '', email: '', location: '', cattle: '', tags: ''
  });
  const [errors, setErrors] = useState({});

  const handleNewTicketChange = (e) => {
    setNewTicket({ ...newTicket, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); // Clear error on change
  };

  const validateAndSubmit = () => {
    const { name, issue, phone, email, location, cattle, tags } = newTicket;
    const nameRegex = /^[A-Za-z ]{2,}$/;
    const phoneRegex = /^[987]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const locationRegex = /^[A-Za-z ]+$/;
    const numberRegex = /^\d+$/;

    const newErrors = {};
    if (!nameRegex.test(name)) newErrors.name = "Name must be at least 2 alphabetic characters.";
    if (!phoneRegex.test(phone)) newErrors.phone = "Phone must be 10 digits and start with 9, 8, or 7.";
    if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email.";
    if (!locationRegex.test(location)) newErrors.location = "Location must contain alphabets only.";
    if (!numberRegex.test(cattle)) newErrors.cattle = "Cattle must be numeric.";
    if (!issue) newErrors.issue = "Issue cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newEntry = { ...newTicket, tags: tags.split(',').map(t => t.trim().toUpperCase()) };
    setTickets([...tickets, newEntry]);
    setShowModal(false);
    setNewTicket({ name: '', issue: '', phone: '', email: '', location: '', cattle: '', tags: '' });
    setErrors({});
  };

  const showPopup = (title, content, type = null) => {
    setPopupContent({ title, content });
    setPopupType(type);
    setMessageSent(false);
  };

  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => {
      setPopupContent(null);
    }, 1500);
  };

  const deleteTicket = (index) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter((_, i) => i !== index));
      alert("Ticket deleted successfully.");
    }
  };

  return (
    <div className="crm-dashboard">
      <div className="crm-header">
        <div>
          <h2>Customer Relationship Management</h2>
        </div>
        <button className="new-ticket-button" onClick={() => setShowModal(true)}>+ New Ticket</button>
      </div>

      <div className="crm-stats">
        <div><h3>{tickets.length}</h3><p>Total Requests</p><small className="blue">12% from last month</small></div>
        <div><h3>{tickets.filter(t => t.tags.includes("PENDING")).length}</h3><p>Pending Requests</p><small className="red">5% from last week</small></div>
        <div><h3>2.4</h3><p>Avg. Resolution Time</p><small className="blue">Improving</small></div>
        <div><h3>94%</h3><p>Customer Satisfaction</p><small className="blue">3% from last quarter</small></div>
      </div>

      <div className="crm-ticket-list">
        {tickets.map((t, i) => (
          <div className="ticket" key={i}>
            <img src={'https://i.pravatar.cc/60?u=${i}'}
             alt={t.name} />
            <div className="ticket-content">
              <h4>{t.name} <div className="tags">{t.tags.map(tag => <span key={tag} className={tag}>{tag}</span>)}</div></h4>
              <p><strong>Issue:</strong> {t.issue}</p>
              <p>📞 {t.phone} | ✉️ {t.email}</p>
              <p>📍 {t.location} | 🐄 {t.cattle}</p>
            </div>
            <div className="ticket-actions">
            <button className="view" onClick={() =>
  showPopup(`Ticket Info - ${t.name}`,
    `${t.issue}<br><br>📞 ${t.phone}<br>✉️ ${t.email}<br>📍 ${t.location}<br>🐄 ${t.cattle}`)}>
  View
</button>

<button className="reply" onClick={() =>
  showPopup(`Reply to ${t.name}`, '<textarea placeholder="Type your reply..."></textarea><br/>', 'reply')}>
  Reply
</button>

<button className="email" onClick={() =>
  showPopup(`Email ${t.name}`, `<input value="support@crm.com" /><input value="${t.email}" /><input placeholder="Subject" /><textarea placeholder="Message"></textarea><br/>`, 'email')}>
  Email
</button>
 

              <button className="delete" onClick={() => deleteTicket(i)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for new ticket */}
      {showModal && (
        <div className="modal">
   <div className="modal-content2">
  <h4>New Ticket</h4>
  
  <div className="modal-body3">
    {["name", "issue", "phone", "email", "location", "cattle", "tags"].map((f) => (
      <div key={f} className="input-group">
        <input
          id={f}
          placeholder={f[0].toUpperCase() + f.slice(1).replace('Cattle', 'Cattle / Staff Info')}
          value={newTicket[f]}
          onChange={handleNewTicketChange}
        />
        {errors[f] && <small className="error">{errors[f]}</small>}
      </div>
    ))}
  </div>

  <div className="modal-buttons">
    <button className="submit-btn" onClick={validateAndSubmit}>Submit</button>
    <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
  </div>
</div>
        </div>
      )}

      {/* Popup Modal */}
      {popupContent && (
        <div className="modal" onClick={() => setPopupContent(null)}>
          <div className="modal-content4" onClick={e => e.stopPropagation()}>
            <h4>{popupContent.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: popupContent.content }}></div>
            <div className="modal-buttons">
              {popupType === 'reply' || popupType === 'email' ? (
                !messageSent ? (
                  <button className="submit-btn" onClick={handleSendMessage}>Send</button>
                ) : (
                  <div className="success-msg">Message sent successfully!</div>
                )
              ) : null}
              <button className="cancel-btn" onClick={() => setPopupContent(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;