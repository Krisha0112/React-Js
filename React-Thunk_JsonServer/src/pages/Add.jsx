import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ADD_USER from '../redux/action/crudAction'

function Add() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [forminput, setFormInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...forminput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forminput);
    
    dispatch(ADD_USER(forminput))
    navigate('/')
    alert('Form Submitted!');
  };

  return (
    <div className="form-container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={forminput.name}
            onChange={changeInput}
            placeholder="Enter Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={forminput.email}
            onChange={changeInput}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={forminput.password}
            onChange={changeInput}
            placeholder="Enter Password"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <div className="link-wrapper">
        <Link to="/">View Users</Link>
      </div>
    </div>
  );
}

export default Add;
