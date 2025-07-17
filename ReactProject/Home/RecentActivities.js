import React, { useState } from 'react';
import './RecentActivities.css';

const RecentActivities = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSubmitted(false);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name || formData.name.length < 3) {
      errs.name = 'Name must be at least 3 letters';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.query) {
      errs.query = 'Please enter your query';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', query: '' });
    } else {
      setErrors(errs);
      setSubmitted(false);
    }
  };

  return (
    <div className="container">
      <div className="section-title">
        <span className="icon-dot"></span>Recent Activities</div>
      <div className="activity-item">New delivery assigned to Shop #421</div>
      <div className="activity-item">Farmer Ashwini registered</div>
      <div className="activity-item">Order #7854 updated</div>
      <div className="activity-item">Quality inspection passed for Batch #MILK-0624-05</div>

      <div className="support-section">
        <div className="section-title">Need Help?</div>
        <p>Contact our support team for quick assistance.</p>
        <button className="support-button" onClick={() => setShowModal(true)}>Contact Support</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3 className="section-title">Support Form</h3>
            <form className="support-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error-text">{errors.name}</div>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-text">{errors.email}</div>}

              <textarea
                name="query"
                placeholder="Your Query"
                rows="4"
                value={formData.query}
                onChange={handleChange}
              />
              {errors.query && <div className="error-text">{errors.query}</div>}

              <button type="submit" className="submit-button">Submit</button>

              {submitted && <div className="form-message">Our team will get back to you soon.</div>}
            </form>

            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentActivities;