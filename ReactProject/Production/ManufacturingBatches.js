import React, { useState } from 'react';
import './ManufacturingBatches.css';
import { FaIndustry } from 'react-icons/fa';

const initialBatches = [
  { product: "Whole Milk (1L)", batchId: "B-0425-001", startTime: "2025-04-25T08:15", quantity: 1200, qcStatus: "Approved", packaging: "Tetra Pack" },
  { product: "Skim Milk (500ml)", batchId: "B-0425-002", startTime: "2025-04-25T10:30", quantity: 2400, qcStatus: "Pending", packaging: "Plastic Bottle" },
  { product: "Yogurt (150g)", batchId: "B-0425-003", startTime: "2025-04-25T13:45", quantity: 3600, qcStatus: "Rejected", packaging: "Cup" }
];

const ManufacturingBatches = () => {
  const [batches, setBatches] = useState(initialBatches);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    product: '',
    unit: '',
    startTime: '',
    quantity: 1500,
    qcStatus: '',
    packaging: ''
  });

  const openModal = (mode, index = null) => {
    setModalMode(mode);
    setModalOpen(true);
    setCurrentIndex(index);

    if (mode === 'edit' || mode === 'view') {
      const b = batches[index];
      const match = b.product.match(/(.+?)\s\((.+)\)/);
      setForm({
        product: match?.[1] || '',
        unit: match?.[2] || '',
        startTime: b.startTime,
        quantity: b.quantity,
        qcStatus: b.qcStatus,
        packaging: b.packaging
      });
    } else {
      setForm({ product: '', unit: '', startTime: '', quantity: 1500, qcStatus: '', packaging: '' });
    }
  };

  const closeModal = () => setModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const generateBatchId = () => {
    const next = batches.length + 1;
    return `B-0425-${String(next).padStart(3, '0')}`;
  };

const handleSave = () => {
  const { product, unit, startTime, quantity, qcStatus, packaging } = form;
  const newErrors = {};

  if (!/^[A-Za-z\s]{3,}$/.test(product)) {
    newErrors.product = 'Enter a valid product name (min 3 letters)';
  }
  if (!unit) newErrors.unit = 'Unit is required';
  if (!startTime) newErrors.startTime = 'Start time is required';
  if (!quantity || quantity <= 0) newErrors.quantity = 'Enter valid quantity';
  if (!qcStatus) newErrors.qcStatus = 'Select QC status';
  if (!packaging) newErrors.packaging = 'Packaging is required';

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return; // stop if any errors

  const fullProduct = `${product} (${unit})`;

  if (modalMode === 'edit' && currentIndex !== null) {
    const updated = [...batches];
    updated[currentIndex] = { ...updated[currentIndex], product: fullProduct, startTime, quantity, qcStatus, packaging };
    setBatches(updated);
  } else {
    setBatches([...batches, {
      product: fullProduct,
      batchId: generateBatchId(),
      startTime,
      quantity,
      qcStatus,
      packaging
    }]);
  }

  closeModal(); // clear modal after save
};

  return (
    <div className="batch-container">
      <div className="batch-header">
        <div className="batch-title">
            <FaIndustry /> 
            <h2>Manufacturing</h2>
            </div>
       
        
        <button className="batch-button" onClick={() => openModal('add')}>+ New Batch</button>
      </div>
      

      <table className="batch-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Batch ID</th>
            <th>Start Time</th>
            <th>Quantity</th>
            <th>QC Status</th>
            <th>Packaging</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((b, i) => (
            <tr key={i}>
              <td>{b.product}</td>
              <td>{b.batchId}</td>
              <td>{new Date(b.startTime).toLocaleString()}</td>
              <td>{b.quantity} units</td>
              <td><span className={`status-${b.qcStatus.toLowerCase()}`}>{b.qcStatus}</span></td>
              <td>{b.packaging}</td>
              <td className="actions">
                <button onClick={() => openModal('edit', i)} title="Edit">✏️</button>
                <button onClick={() => openModal('view', i)} title="View">👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
  <div className="popup-overlay" onClick={(e) => e.target.className === 'popup-overlay' && closeModal()}>
    <div className="popup">
      <h2>{modalMode === 'edit' ? 'Edit Batch' : modalMode === 'view' ? 'View Batch' : 'New Batch'}</h2>

      {['Product', 'Unit', 'Start Time', 'Quantity', 'QC Status', 'Packaging'].map((label, idx) => {
        const fieldMap = {
          'Product': 'product',
          'Unit': 'unit',
          'Start Time': 'startTime',
          'Quantity': 'quantity',
          'QC Status': 'qcStatus',
          'Packaging': 'packaging'
        };
        const name = fieldMap[label];

        const isSelect = ['unit', 'qcStatus', 'packaging'].includes(name);
        const options = {
          unit: ['1L', '500ml', '150g'],
          qcStatus: ['Approved', 'Pending', 'Rejected'],
          packaging: ['Tetra Pack', 'Plastic Bottle', 'Cup']
        };

        return (
          <div key={idx}>
            <label>{label}:</label>
            {isSelect ? (
              <select
                name={name}
                value={form[name]}
                onChange={handleChange}
                disabled={modalMode === 'view'}
              >
                <option value="">Select</option>
                {options[name].map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={name === 'quantity' ? 'number' : name === 'startTime' ? 'datetime-local' : 'text'}
                name={name}
                value={form[name]}
                onChange={handleChange}
                disabled={modalMode === 'view'}
                placeholder={label === 'Product' ? 'Enter product name' : ''}
              />
            )}
            {/* ✅ Error message just below each field */}
            {errors[name] && <p className="error-msg">{errors[name]}</p>}
          </div>
        );
      })}

      <div className="popup-actions">
        {modalMode !== 'view' && <button onClick={handleSave}>Save</button>}
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  </div>
)}
      
    </div>
  );
};

export default ManufacturingBatches;