import './App.css';
import { useState } from "react";

function App() {

  const [form, setForm] = useState([
    { name: "", email: "", salary: "" }
  ])

  const addForm = () => {
    setForm([...form, { name: "", email: "", salary: "" }])
  }

  const handleSubmit = () => {
    const isValid  = form.some(item =>
      item.name.trim() === "" || item.email.trim() === "" || item.salary.trim() === ""
    );

    if (isValid ) {
      alert("Fill the fields");
    } else {
      alert("Form submit successfully...!!");
      console.log(form);
      setForm([{ name: "", email: "", salary: "" }]);
    }
  }
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    let field = [...form];
    field[index][name] = value;
    setForm(field);
  }

  const removeForm = (index, e) => {
    e.preventDefault();
    const filterData = form.filter((val, i) => i !== index);
    setForm(filterData);
  }

  return (
    <div className="container">
      <h1>React - Add & Delete Table Rows Dynamically</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th><button className="add-btn" onClick={addForm}>+</button></th>
          </tr>
        </thead>
        <tbody>
          {
            form.map((val, index) => (
              <tr key={index}>
                <td><input type="text" name="name" value={val.name} onChange={(e) => handleChange(index, e)} placeholder="Enter name" /></td>
                <td><input type="email" name="email" value={val.email} onChange={(e) => handleChange(index, e)} placeholder="Enter email" /></td>
                <td><input type="text" name="salary" value={val.salary} onChange={(e) => handleChange(index, e)} placeholder="Enter salary" /></td>
                <td>
                  {
                    index !== 0 && (
                      <button className="delete-btn" onClick={(e) => removeForm(index, e)}>X</button>
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;