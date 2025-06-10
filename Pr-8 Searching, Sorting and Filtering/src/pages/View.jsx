import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function View() {
  const [allRecord, setAllRecord] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [clientNameSearch, setClientNameSearch] = useState('');
  const [planSearch, setPlanSearch] = useState('');
  const [trainerSearch, setTrainerSearch] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('clients') || '[]');
    setAllRecord(data);
    setFilteredRecords(data);
  }, []);

  const handleClientNameSearch = (e) => {
    setClientNameSearch(e.target.value);
  };

  const handlePlanSearch = (e) => {
    setPlanSearch(e.target.value);
  };

  const handleTrainerSearch = (e) => {
    setTrainerSearch(e.target.value);
  };

  useEffect(() => {
    let filteredData = [...allRecord];

    if (clientNameSearch) {
      filteredData = filteredData.filter((val) =>
        val.clientName.toLowerCase().includes(clientNameSearch.toLowerCase())
      );
    }

    if (planSearch) {
      filteredData = filteredData.filter((val) =>
        val.plan.toLowerCase().includes(planSearch.toLowerCase())
      );
    }

    if (trainerSearch) {
      filteredData = filteredData.filter((val) =>
        val.trainer.toLowerCase().includes(trainerSearch.toLowerCase())
      );
    }

    if (selectedPlan) {
      filteredData = filteredData.filter((val) => val.plan === selectedPlan);
    }

    setFilteredRecords(filteredData);
  }, [clientNameSearch, planSearch, trainerSearch, selectedPlan, allRecord]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });

    const sortedData = [...filteredRecords].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredRecords(sortedData);
  };

  const deleteUser = (id) => {
    const deletedData = allRecord.filter(val => val.id !== id);
    localStorage.setItem('clients', JSON.stringify(deletedData));
    setAllRecord(deletedData);
    setFilteredRecords(deletedData);
    alert("Record Successfully Deleted......!");
  };

  const editUser = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <h2>Fitness Program Tracker</h2>

      <Link to="/add"><button className="add-client-btn">Add New Client</button></Link>

      <div className="search-filter">
        <div className="search-item">
          <input
            type="text"
            placeholder="Search by Client Name"
            value={clientNameSearch}
            onChange={handleClientNameSearch}
          />
        </div>
        <div className="search-item">
          <input
            type="text"
            placeholder="Search by Plan"
            value={planSearch}
            onChange={handlePlanSearch}
          />
        </div>
        <div className="search-item">
          <input
            type="text"
            placeholder="Search by Trainer"
            value={trainerSearch}
            onChange={handleTrainerSearch}
          />
        </div>
      </div>

      <div className="plan-filter">
        <label>Filter by Plan: </label>
        <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
          <option value="">All Plans</option>
          <option value="Yoga">Yoga</option>
          <option value="Strength">Strength</option>
          <option value="Cardio">Cardio</option>
        </select>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('clientName')}>Client Name</th>
            <th onClick={() => handleSort('plan')}>Plan</th>
            <th onClick={() => handleSort('trainer')}>Trainer</th>
            <th onClick={() => handleSort('schedule')}>Schedule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.clientName}</td>
              <td>{val.plan}</td>
              <td>{val.trainer}</td>
              <td>{val.schedule}</td>
              <td className="action-buttons">
                <button onClick={() => deleteUser(val.id)}>Delete</button>
                <button onClick={() => editUser(val.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;
