import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { editid } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: '',
    plan: '',
    trainer: '',
    schedule: ''
  });

  const [allRecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('clients')) || [])

  useEffect(() => { 
    let single = allRecord.find(val => val.id == editid)
    setFormData(single)
  }, [editid])

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const up = allRecord.map((val) => {
      if (val.id == editid) {
        return formData
      }
      return val;
    })
    localStorage.setItem('users', JSON.stringify(up));
    setAllRecord(up);
    alert("Record Updated");
    navigate('/')
  }


  return (
    <div className="container">
      <h2>Edit Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Client Name:</label>
          <input
            type="text"
            name="clientName"
            placeholder='Enter Client Name.....!'
            value={formData.clientName}
            onChange={changeInput}
            required
          />
        </div>

        <div className="form-group">
          <label>Plan Type:</label>
          <select
            name="plan"
            value={formData.plan}
            onChange={changeInput}
            required
          >
            <option value="">-- Select Plan --</option>
            <option value="Yoga">Yoga</option>
            <option value="Cardio">Cardio</option>
            <option value="Weight Training">Weight Training</option>
            <option value="Zumba">Zumba</option>
          </select>
        </div>

        <div className="form-group">
          <label>Trainer Name:</label>
          <input
            type="text"
            name="trainer"
            value={formData.trainer}
            placeholder='Enter Trainer Name'
            onChange={changeInput}
            required
          />
        </div>

        <div className="form-group">
          <label>Schedule Start Date:</label>
          <input
            type="date"
            name="schedule"
            value={formData.schedule}
            onChange={changeInput}
            required
          />
        </div>

        <button type="submit">Update Client</button>
      </form>
    </div>
  );
}

export default Edit;
