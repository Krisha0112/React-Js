import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../Firebase";


function Edit() {

    const location = useLocation();
    console.log(location?.state);
    

  const navigate = useNavigate();

  const [forminput, setFormInput] = useState({
    name: "",
    age: "",
  });

  useEffect(() => {
   setFormInput({
    ...forminput,
    name: location?.state?.name,
    age : location?.state?.age
   })
  }, [location?.state])

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

    const singleRow = ref(db, `users/${location?.state?.id}`);
    
    update(singleRow, {
      name: forminput.name,
      age: forminput.age
    }).then((res) => {
      alert("Record Successfully Updated....!");
      navigate('/')
    }).catch((err) => {
      console.log(err);
      return false;
    })

    
  }

  return (
    <div className="container" align="center">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Name :-</td>
              <td>
                <input type="text" name="name" onChange={changeInput} value={forminput.name} />
              </td>
            </tr>
            <tr>
              <td>Age :-</td>
              <td>
                <input type="text" name="age" onChange={changeInput} value={forminput.age} />
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

export default Edit;
