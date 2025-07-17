import React, { useState } from 'react';
import './Veterinary.css';
import { FaSyringe, FaHeartbeat, FaCalendarAlt, FaTimes, FaListAlt } from 'react-icons/fa';

const Veterinary = () => {
  const [showModal, setShowModal] = useState(false);
  const [visitDate, setVisitDate] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [records, setRecords] = useState([
    { animal: 'Raju', vaccine: 'FMD', date: '2025-07-08', status: 'Completed' },
    { animal: 'Anjali', vaccine: 'HS', date: '2025-07-05', status: 'Scheduled' }
  ]);
  const [viewReport, setViewReport] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmit = () => {
    if (animalName.length < 3) {
      alert("Animal name must be at least 3 characters.");
      return;
    }
    const newRecord = { animal: animalName, vaccine, date: visitDate, status: 'Scheduled' };
    setRecords([...records, newRecord]);
    setShowModal(false);
    setAnimalName('');
    setVaccine('');
    setVisitDate('');
  };

  return (
    <div className="container31">
      <div className="header31"><FaHeartbeat /> Veterinary Dashboard</div>

      <div className="card-container31">
        <div className="carde31">
          <FaSyringe className="icon31" />
          <h3>Upcoming Vaccinations</h3>
          <ul>
            {records.map((r, idx) => (
              <li key={idx}><strong>{r.animal}</strong> - {r.vaccine} on {r.date}</li>
            ))}
          </ul>
        </div>

        <div className="carde31">
          <FaHeartbeat className="icon31" />
          <h3>Recent Health Checks</h3>
          <p>All animals are in good health.</p>
        </div>

        <div className="carde31">
          <FaCalendarAlt className="icon31" />
          <h3>Schedule Visit</h3>
          <button className="btn31" onClick={openModal}>Schedule</button>
        </div>

        <div className="carde31">
          <FaListAlt className="icon31" />
          <h3>View Report</h3>
          <button className="btn31" onClick={() => setViewReport(true)}>Report</button>
        </div>
      </div>

      {showModal && (
        <div className="modal31">
          <div className="modal-content31">
            <h3>Schedule Visit</h3>
            <label>Animal Name</label>
            <input type="text" value={animalName} onChange={(e) => setAnimalName(e.target.value)} />
            <label>Vaccine</label>
            <input type="text" value={vaccine} onChange={(e) => setVaccine(e.target.value)} />
            <label>Visit Date</label>
            <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} />
            <button className="btn31" onClick={handleSubmit}>Save</button>
            <button className="btn-close31" onClick={closeModal}><FaTimes /></button>
          </div>
        </div>
      )}

      {viewReport && (
        <div className="modal31">
          <div className="modal-content31">
            <h3>Vaccination Report</h3>
            {records.map((r, idx) => (
              <div key={idx}>
                <strong>{r.animal}</strong>: {r.vaccine} - {r.date} ({r.status})
              </div>
            ))}
            <button className="btn-close31" onClick={() => setViewReport(false)}><FaTimes /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Veterinary;