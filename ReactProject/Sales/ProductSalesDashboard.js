import React, { useState } from 'react';
import './ProductSalesDashboard.css';

const ProductSalesDashboard = () => {
  const [products, setProducts] = useState([
    { name: 'Fresh Milk, Daily Health', platform: 'Facebook', reach: 22000, status: 'Running' },
    { name: 'Taste the Tradition', platform: 'Instagram', reach: 15500, status: 'New' },
    { name: 'Village to City Drive', platform: 'Local Radio', reach: 9800, status: 'Ended' },
    { name: 'Supply milk & Improve Health', platform: 'WhatsApp', reach: 10000, status: 'On Going' }
  ]);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    platform: '',
    reach: '',
    status: ''
  });

  const [errors, setErrors] = useState({});

  const statusClass = {
    Running: 'status-running',
    New: 'status-new',
    Ended: 'status-ended',
    'On Going': 'status-ongoing'
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on input
  };

  const handleAddProduct = () => {
    const { name, platform, reach, status } = newProduct;
    const newErrors = {};

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = 'Product name must only contain letters and spaces.';
    } else if (name.trim().length < 3) {
      newErrors.name = 'Product name should be at least 3 characters long.';
    }

    if (!/^\d+$/.test(reach)) {
      newErrors.reach = 'Reach must be a valid number.';
    }

    if (!platform) {
      newErrors.platform = 'Please select a platform.';
    }

    if (!status) {
      newErrors.status = 'Please select a status.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setProducts([
      ...products,
      { name, platform, reach: parseInt(reach), status }
    ]);

    setNewProduct({ name: '', platform: '', reach: '', status: '' });
    setErrors({});
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase().replace(/\s+/g, ''))
  );

  return (
    <div className="container">
      <div className="header1">
        <h2>Product Sales Performance</h2>
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" onClick={() => setIsModalOpen(true)}>+ Add Product</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PLATFORM</th>
            <th>REACH</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((prod, index) => (
            <tr key={index}>
              <td>{prod.name}</td>
              <td>{prod.platform}</td>
              <td>{prod.reach.toLocaleString()}</td>
              <td><span className={`status ${statusClass[prod.status]}`}>{prod.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="services">
        <h2>Services Engagement</h2>
        <p><span>WhatsApp Campaign:</span> New product alert sent to 3,000 customers. <small>(Apr 13)</small></p>
        <p><span>Referral Program:</span> 450 new customers through referral codes. <small>(Apr 10)</small></p>
        <p><span>Email Newsletter:</span> Open rate at 43%. <small>(Apr 9)</small></p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h3>Add Product</h3>

            <input
              name="name"
              type="text"
              placeholder="Product Name (min 3 letters)"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <select name="platform" value={newProduct.platform} onChange={handleInputChange}>
              <option disabled value="">Select Platform</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>WhatsApp</option>
              <option>Local Radio</option>
            </select>
            {errors.platform && <p className="error">{errors.platform}</p>}

            <input
              name="reach"
              type="number"
              placeholder="Reach (numbers only)"
              value={newProduct.reach}
              onChange={handleInputChange}
            />
            {errors.reach && <p className="error">{errors.reach}</p>}

            <select name="status" value={newProduct.status} onChange={handleInputChange}>
              <option disabled value="">Select Status</option>
              <option>Running</option>
              <option>New</option>
              <option>Ended</option>
              <option>On Going</option>
            </select>
            {errors.status && <p className="error">{errors.status}</p>}

            <button type="button" onClick={handleAddProduct}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSalesDashboard;