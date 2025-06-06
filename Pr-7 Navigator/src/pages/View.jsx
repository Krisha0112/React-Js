import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function View() {
  const [allRecord, setAllRecord] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('clients') || '[]');
    setAllRecord(data);
  }, []);

  const deleteUser = (id) => {
    let deletedata = allRecord.filter(val => val.id != id);
    localStorage.setItem('users', JSON.stringify(deletedata));
    setAllRecord(deletedata);
    alert("Record Successfully Deleted......!")
  };

  const editUser = (id) => {
    navigate(`/edit/${id}`)
  };

  return (
    <div className="container">
      <h2>Fitness Program Tracker</h2>
      <Link to="/add"><button>Add New Client</button></Link>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Plan</th>
            <th>Trainer</th>
            <th>Schedule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allRecord.map((val, index) => (
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
