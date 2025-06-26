import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";


function Add() {

  const navigate = useNavigate();

  const [forminput, setFormInput] = useState({
    name: "",
    age: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...forminput,
      [name]: value,
    })
  };
  const db = getDatabase(app);
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      userid: Math.floor(Math.random() * 100000),
      ...forminput
    }
    console.log(obj);

    set(ref(db,`users/${obj.userid}`),{
        name : forminput.name,
        age : forminput.age
    })
    .then((res)=>{
        console.log(res);
        navigate('/');
    })
    .catch((err)=>{
        console.log(err);
        
    })
  };

  return (
    <div className="container" align="center">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Name :-</td>
              <td>
                <input type="text" name="name" onChange={changeInput} />
              </td>
            </tr>
            <tr>
              <td>Age :-</td>
              <td>
                <input type="text" name="age" onChange={changeInput} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" />
              </td>
            </tr>
          </thead>
        </table>
      </form>

      <hr />
      <Link to={"/"}>View</Link>
    </div>
  );
}

export default Add;
