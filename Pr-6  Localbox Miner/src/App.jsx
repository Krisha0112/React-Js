import { useState } from "react";
import './App.css';

function App() {
  const [formInput, setFormInput] = useState({
    clientName: "",
    plan: "",
    trainer: "",
    schedule: "",
  });

  const [editId, setEditId] = useState("");

  const [allRecords, setAllRecords] = useState(
    localStorage.getItem("fitnessClients")
      ? JSON.parse(localStorage.getItem("fitnessClients"))
      : []
  );

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: editId || Math.floor(Math.random() * 10000),
      ...formInput,
    };

    let up;

    if (editId) {
      up = allRecords.map((record) =>
        record.id === editId ? obj : record
      );
      setEditId("");
    } else {
      up = [...allRecords, obj];
    }

    setAllRecords(up);
    localStorage.setItem("fitnessClients", JSON.stringify(up));

    setFormInput({
      clientName: "",
      plan: "",
      trainer: "",
      schedule: "",
    });
  };

  const deleteUser = (index) => {
    const filtered = allRecords.filter((_, i) => i !== index);
    setAllRecords(filtered);
    localStorage.setItem("fitnessClients", JSON.stringify(filtered));
  };

  const editUser = (id) => {
    const single = allRecords.find((r) => r.id === id);
    setFormInput(single);
    setEditId(id);
  };

  return (

    <div className="container">
      <h2>Fitness Program Tracker </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Client Name:</label>
          <input type="text" name="clientName" value={formInput.clientName} onChange={changeInput} required />
        </div>

        <div className="form-group">
          <label>Plan Type:</label>
          <select name="plan" value={formInput.plan} onChange={changeInput} required>
            <option value="">- - - Select Plan - - -</option>
            <option value="Yoga">Yoga</option>
            <option value="Cardio">Cardio</option>
            <option value="Weight Training">Weight Training</option>
            <option value="Zumba">Zumba</option>
          </select>
        </div>

        <div className="form-group">
          <label>Trainer Name:</label>
          <input type="text" name="trainer" value={formInput.trainer} onChange={changeInput} required />
        </div>

        <div className="form-group">
          <label>Schedule Start Date:</label>
          <input type="date" name="schedule" value={formInput.schedule} onChange={changeInput} required />
        </div>

        <button type="submit">{editId ? "Update" : "Add"} Client</button>
      </form>

      <table>
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
          {allRecords.map((val, index) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.clientName}</td>
              <td>{val.plan}</td>
              <td>{val.trainer}</td>
              <td>{val.schedule}</td>
              <td className="action-buttons">
                <button onClick={() => deleteUser(index)}>Delete</button>
                <button onClick={() => editUser(val.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>





  );
}

export default App;
