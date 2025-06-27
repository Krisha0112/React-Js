import { getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../../firebase";

function Add() {
  const [forminput, setFormInput] = useState({
    name: "",
    age: "",
  });

  const db = getFirestore(app);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...forminput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      userid: Math.floor(Math.random() * 1000000),
      ...forminput,
    };

    console.log(obj);
  };

  return (
    <div align="center">
      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Name: -</td>
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
