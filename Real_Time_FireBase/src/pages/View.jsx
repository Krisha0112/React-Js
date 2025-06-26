import { getDatabase, onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../Firebase";

function View() {

    const [alluser, setAllUSer] = useState("");
 
    const db = getDatabase(app)

    const getUser = () => {
        const allrecord = ref(db, 'users');
        onValue (allrecord, (row) => {
            const data = row.val();
            setAllUSer(data);
        })
    }

    useEffect(() => {
        getUser();
    },[])

    const deleteUser = (id) => {
       const deletedata = ref(db, `users/${id}`);
       remove(deletedata)
       .then ((res) => {
        alert('record successfully deleted.....!')
        getUser()
       }).catch((err) => {
        console.log(err);
        return false;
       })
    } 

  return (
    <div align="center">
      <h1>View User</h1>
      
      <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                Object.entries(alluser).map(([key, value]) => {
                    return(
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>
                                <button onClick={ () => deleteUser(key)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>



      <hr />
      <Link to={"/add"}>Add</Link>
    </div>
  );
}

export default View;
