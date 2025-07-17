import React, { useState } from "react";
import "./Rawmilk.css";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const initialData = [
  {
    id: 1,
    batchId: "MILK-20250711-01",
    dateTime: "2025-07-10T08:15",
    quantity: 850,
    fatContent: "4.2%",
    source: "Farm A",
    tank: "Tank 3",
    status: "Fresh",
  },
  {
    id: 2,
    batchId: "MILK-20250710-02",
    dateTime: "2025-07-09T14:30",
    quantity: 720,
    fatContent: "3.8%",
    source: "Farm B",
    tank: "Tank 2",
    status: "Expired",
  },
  {
    id: 3,
    batchId: "MILK-20250710-03",
    dateTime: "2025-08-09T14:30",
    quantity: 700,
    fatContent: "4.8%",
    source: "Farm c",
    tank: "Tank 3",
    status: "fresh",
  },
];

const generateBatchId = (existingLength) => {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `MILK-${date}-${String(existingLength + 1).padStart(2, "0")}`;
};

const Rawmilk = () => {
  const [batches, setBatches] = useState(initialData);
  const [modalType, setModalType] = useState(null); // 'new', 'view', 'edit'
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [formData, setFormData] = useState({
    dateTime: "",
    quantity: "",
    fatContent: "",
    source: "",
    tank: "",
    status: "",
  });
  const [deleteId, setDeleteId] = useState(null);
  const [error, setError] = useState("");

  const openModal = (type, batch = null) => {
    setModalType(type);
    setError("");
    if (batch) {
      setSelectedBatch(batch);
      setFormData({ ...batch });
    } else {
      setSelectedBatch(null);
      setFormData({
        dateTime: "",
        quantity: "",
        fatContent: "",
        source: "",
        tank: "",
        status: "",
      });
    }
  };

  const closeModal = () => {
    setModalType(null);
    setFormData({
      dateTime: "",
      quantity: "",
      fatContent: "",
      source: "",
      tank: "",
      status: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { dateTime, quantity, fatContent, source, tank, status } = formData;
    if (!dateTime || !quantity || !fatContent || !source || !tank || !status) {
      setError("All fields are required.");
      return;
    }

    if (modalType === "new") {
      const newBatch = {
        id: Date.now(),
        batchId: generateBatchId(batches.length),
        ...formData,
      };
      setBatches([...batches, newBatch]);
    } else if (modalType === "edit" && selectedBatch) {
      const updated = batches.map((b) =>
        b.id === selectedBatch.id ? { ...selectedBatch, ...formData } : b
      );
      setBatches(updated);
    }
    closeModal();
  };

  const confirmDelete = () => {
    setBatches((prev) => prev.filter((b) => b.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="dashboard19">
      <div className="top-bar19">
        <h2>Raw Milk Inventory</h2>
        <button className="btn-add19" onClick={() => openModal("new")}>
          <FaPlus /> New Batch
        </button>
      </div>

      <div className="table-container19">
        <table className="milk-table19">
          <thead>
            <tr>
              <th>Batch ID</th>
              <th>Date/Time</th>
              <th>Quantity (L)</th>
              <th>Fat Content</th>
              <th>Source</th>
              <th>Storage Tank</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr key={batch.id}>
                <td>{batch.batchId}</td>
                <td>{batch.dateTime}</td>
                <td>{batch.quantity}</td>
                <td>{batch.fatContent}</td>
                <td>{batch.source}</td>
                <td>{batch.tank}</td>
                <td className={`status ${batch.status.toLowerCase()}`}>
                  {batch.status}
                </td>
                <td>
                  <button onClick={() => openModal("view", batch)}>
                    <FaEye />
                  </button>
                  {batch.status !== "Expired" && (
                    <button onClick={() => openModal("edit", batch)}>
                      <FaEdit />
                    </button>
                  )}
                  {batch.status === "Expired" && (
                    <button onClick={() => setDeleteId(batch.id)}>
                      <FaTrash />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalType && (
        <div className="modal19">
          <div className="modal-content19">
            <h3>
              {modalType === "new"
                ? "New Batch"
                : modalType === "edit"
                ? "Edit Batch"
                : "View Batch"}
            </h3>

            {[
              { label: "Date/Time", name: "dateTime", type: "datetime-local" },
              { label: "Quantity (Liters)", name: "quantity", type: "number" },
              { label: "Fat Content (%)", name: "fatContent", type: "text" },
            ].map(({ label, name, type }) => (
              <div className="form-group19" key={name}>
                <label>{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  disabled={modalType === "view"}
                />
              </div>
            ))}

            {["source", "tank", "status"].map((name) => (
              <div className="form-group19" key={name}>
                <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  disabled={modalType === "view"}
                >
                  <option value="">Select {name}</option>
                  {name === "source" &&
                    ["Farm A", "Farm B"].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  {name === "tank" &&
                    ["Tank 1", "Tank 2", "Tank 3"].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  {name === "status" &&
                    ["Fresh", "Testing", "Expired"].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                </select>
              </div>
            ))}

            {error && <p className="error19">{error}</p>}

            <div className="modal-actions19">
              <button className="btn19" onClick={closeModal}>
                Close
              </button>
              {modalType !== "view" && (
                <button className="btn19 primary" onClick={handleSubmit}>
                  {modalType === "new" ? "Add Batch" : "Update Batch"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="modal19">
          <div className="modal-content19">
            <h4>Confirm Deletion</h4>
            <p>Are you sure you want to delete this batch?</p>
            <div className="modal-actions19">
              <button className="btn19" onClick={() => setDeleteId(null)}>
                Cancel
              </button>
              <button className="btn19 danger" onClick={confirmDelete}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rawmilk;