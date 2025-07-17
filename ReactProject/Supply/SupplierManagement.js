import React, { useState, useEffect } from 'react';
import './SupplierManagement.css';

const initialSuppliers = [
  {
    id: 'SUP-101',
    name: 'Rajesh Dairy Farm',
    category: 'Raw Milk',
    location: 'Bangalore Rural',
    score: 4,
    lastDelivery: '2025-04-25',
    status: 'Active',
  },
  {
    id: 'SUP-002',
    name: 'Agri Feeds Ltd',
    category: 'Cattle Feed',
    location: 'Tumkur',
    score: 3,
    lastDelivery: '2025-05-20',
    status: 'Active',
  },
  {
    id: 'SUP-003',
    name: 'Green Pastures',
    category: 'Cattle Feed',
    location: 'Coimbatore',
    score: 3,
    lastDelivery: '2025-03-10',
    status: 'Under Review',
  },
  {
    id: 'SUP-004',
    name: 'PackWell Solutions',
    category: 'Packaging',
    location: 'Hoskote',
    score: 5,
    lastDelivery: '2025-05-26',
    status: 'Active',
  },
];

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    lastDelivery: '',
    status: '',
    score: 3,
  });

  const [nameError, setNameError] = useState('');

 useEffect(() => {
  if (showAddModal || showEditModal || showViewModal) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
}, [showAddModal, showEditModal, showViewModal]);

  const renderStars = (count) => '★★★★★☆☆☆☆☆'.slice(5 - count, 10 - count);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this supplier?');
    if (confirmed) {
      setSuppliers((prev) => prev.filter((s) => s.id !== id));
    }
  };

 const openEditModal = (supplier) => {
  setSelectedSupplier(supplier);
  setFormData({
    name: supplier.name || '',
    category: supplier.category || '',
    location: supplier.location || '',
    lastDelivery: supplier.lastDelivery || '',
    status: supplier.status || '',
    score: supplier.score || 3,
  });
  setNameError(''); // Clear any previous validation error
  setShowEditModal(true);
};

  const openViewModal = (supplier) => {
    setSelectedSupplier(supplier);
    setShowViewModal(true);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if(nameError)return;
    const newSupplier = {
      ...formData,
      id: `SUP-${Math.floor(100 + Math.random() * 900)}`,
    };
    setSuppliers([...suppliers, newSupplier]);
    setFormData({ name: '', category: '', location: '', lastDelivery: '', status: '', score: 3 });
    setShowAddModal(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if(nameError)return;
    setSuppliers((prev) =>
      prev.map((s) => (s.id === selectedSupplier.id ? { ...formData, id: selectedSupplier.id } : s))
    );
    setShowEditModal(false);
  };


  
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Name validation
  if (name === 'name') {
    if (!/^[A-Za-z\s]{2,}$/.test(value)) {
      setNameError('Name must be at least 2 letters and contain no digits.');
    } else {
      setNameError('');
    }
  }
};



  return (
    <div className="supplier-container">
      <div className="supplier-header">
        <h2>Supplier Management</h2>
        <button className="add-btn" onClick={() => setShowAddModal(true)}>+ Add Supplier</button>
      </div>

      <div className="metrics-container">
        <div className="card5 bg1"><h4>Active Suppliers</h4><p>42</p></div>
        <div className="card5 bg2"><h4>Avg. Lead Time</h4><p>3.2 days</p></div>
        <div className="card5 bg3"><h4>On-Time Delivery</h4><p>92%</p></div>
        <div className="card5 bg4"><h4>Quality Compliance</h4><p>96.5%</p></div>
      </div>

      <table className="supplier-table">
        <thead>
          <tr>
            <th>SUPPLIER ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>LOCATION</th>
            <th>RELIABILITY</th>
            <th>LAST DELIVERY</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.category}</td>
              <td>{supplier.location}</td>
              <td className="stars">{renderStars(supplier.score)}</td>
              <td>{supplier.lastDelivery}</td>
              <td className={supplier.status === 'Active' ? 'status-active' : 'status-review'}>
                {supplier.status}
              </td>
              <td className="action-icons">
                <i className="fas fa-eye" onClick={() => openViewModal(supplier)} title="View"></i>
                <i className="fas fa-edit" onClick={() => openEditModal(supplier)} title="Edit"></i>
                <i className="fas fa-trash" onClick={() => handleDelete(supplier.id)} title="Delete"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Supplier Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Supplier</h3>
            <form onSubmit={handleAddSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange}required/>
{              nameError && <div className="error-msg">{nameError}</div> }
              <select name="category" value={formData.category} onChange={handleInputChange} required>
                <option value="">Select Category</option>
                <option>Raw Milk</option>
                <option>Cattle Feed</option>
                <option>Packaging</option>
                <option>Organic Feed</option>
              </select>
              <select name="location" value={formData.location} onChange={handleInputChange} required>
                <option value="">Select Location</option>
                <option>Bangalore Rural</option>
                <option>Tumkur</option>
                <option>Coimbatore</option>
                <option>Hoskote</option>
              </select>
              <input type="date" name="lastDelivery" value={formData.lastDelivery} onChange={handleInputChange} required />
              <select name="status" value={formData.status} onChange={handleInputChange} required>
                <option value="">Select Status</option>
                <option>Active</option>
                <option>Under Review</option>
              </select>
              <select name="score" value={formData.score} onChange={handleInputChange} required>
                {[1, 2, 3, 4, 5].map((s) => <option key={s}>{s}</option>)}
              </select>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Supplier Modal */}
      {showEditModal && selectedSupplier && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Supplier</h3>
            <form onSubmit={handleEditSubmit}>
             <inpu type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
              { nameError && <div className="error-msg">{nameError}</div> }
              <select name="category" value={formData.category} onChange={handleInputChange} required>
                <option>Raw Milk</option>
                <option>Cattle Feed</option>
                <option>Packaging</option>
                <option>Organic Feed</option>
              </select>
              <select name="location" value={formData.location} onChange={handleInputChange} required>
                <option>Bangalore Rural</option>
                <option>Tumkur</option>
                <option>Coimbatore</option>
                <option>Hoskote</option>
              </select>
              <input type="date" name="lastDelivery" value={formData.lastDelivery} onChange={handleInputChange} required />
              <select name="status" value={formData.status} onChange={handleInputChange} required>
                <option>Active</option>
                <option>Under Review</option>
              </select>
              <select name="score" value={formData.score} onChange={handleInputChange} required>
                {[1, 2, 3, 4, 5].map((s) => <option key={s}>{s}</option>)}
              </select>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Supplier Modal */}
      {showViewModal && selectedSupplier && (
        <div className="modal">
          <div className="modal-content">
            <h3>Supplier Details</h3>
            <p><strong>ID:</strong> {selectedSupplier.id}</p>
            <p><strong>Name:</strong> {selectedSupplier.name}</p>
            <p><strong>Category:</strong> {selectedSupplier.category}</p>
            <p><strong>Location:</strong> {selectedSupplier.location}</p>
            <p><strong>Score:</strong> {renderStars(selectedSupplier.score)}</p>
            <p><strong>Last Delivery:</strong> {selectedSupplier.lastDelivery}</p>
            <p><strong>Status:</strong> {selectedSupplier.status}</p>
            <div className="modal-actions">
              <button onClick={() => setShowViewModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierManagement;