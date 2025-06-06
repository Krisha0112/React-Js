import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [formData, setFormData] = useState({
    clientName: '',
    plan: '',
    trainer: '',
    schedule: '',
  });

  const navigate = useNavigate();

  const changeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem('clients') || '[]');
    const newRecord = { ...formData, id: Date.now() };
    existing.push(newRecord);
    localStorage.setItem('clients', JSON.stringify(existing));

    navigate('/');
  };

  return (
    <div className="container">
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Client Name:</label>
          <input type="text" name="clientName" placeholder='Enter client name.....!' onChange={changeInput} required />
        </div>

        <div className="form-group">
          <label>Plan Type:</label>
          <select name="plan" onChange={changeInput} required>
            <option>-- Select Plan --</option>
            <option value="Yoga">Yoga</option>
            <option value="Cardio">Cardio</option>
            <option value="Weight Training">Weight Training</option>
            <option value="Zumba">Zumba</option>
          </select>
        </div>

        <div className="form-group">
          <label>Trainer Name:</label>
          <input type="text" name="trainer" onChange={changeInput} required />
        </div>

        <div className="form-group">
          <label>Schedule Start Date:</label>
          <input type="date" name="schedule" onChange={changeInput} required />
        </div>

        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}

export default Add;
