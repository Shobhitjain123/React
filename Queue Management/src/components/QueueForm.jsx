import React from "react";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <div className="queue-form">
      <h2>Add Customer to Queue</h2>
      <form className="queue-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="support">Support</option>
            <option value="payments">Payments</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus /> Add to Queue
        </button>
      </form>
    </div>
  );
};

export default QueueForm;
