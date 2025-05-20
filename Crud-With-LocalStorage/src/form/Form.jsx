import { useState } from "react"

function Form() {

  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    gender: "",
    courses: [],
    city: ""
  })

  const [allrecord, setAllRecord] = useState(
    localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  )


  const changeInput = (e) => {
    const { name, value, type, checked } = e.target
    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses, value]
        })
      }
      else {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses].filter(val => val != value)
        })
      }
    } else {
      setFormInput({
        ...formInput,
        [name]: value
      })
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submited");

    let oldrecord = [...allrecord, formInput];
    localStorage.setItem('users', JSON.stringify(oldrecord));
    setAllRecord(oldrecord);


    setFormInput({
      username: "",
      useremail: "",
      userpassword: "",
      gender: "",
      courses: [],
      city: ""
    })

  }

  const deleteUser = (index) => {
    let deleterecord = allrecord.filter((val, i) => {
      return i != index
    })
    setAllRecord(deleterecord)
    localStorage.setItem('users', JSON.stringify(deleterecord))
    alert('record deleted')
  }


  return (
    <div align="center">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Name :-</td>
              <td>
                <input type="text" name="username" value={formInput.username} onChange={changeInput} placeholder="Enter your name" />
              </td>
            </tr>
            <tr>
              <td>Email :- </td>
              <td>
                <input type="email" name="useremail" onChange={changeInput} value={formInput.useremail} placeholder="Enter your email" />
              </td>
            </tr>
            <tr>
              <td>Password :- </td>
              <td>
                <input type="password" name="userpassword" value={formInput.userpassword} onChange={changeInput} placeholder="Enter your password" />
              </td>
            </tr>
            <tr>
              <td>Gender :-</td>
              <td>
                <input type="radio" name="gender" onChange={changeInput} checked={formInput.gender === "male"} value="male" />Male
                <input type="radio" name="gender" onChange={changeInput} checked={formInput.gender === "female"} value="female" />Female
              </td>
            </tr>
            <tr>
              <td>Courses :- </td>
              <td>
                <input type="checkbox" name="courses" onChange={changeInput} value="c" checked={formInput.courses.includes("c")} />C
                <input type="checkbox" name="courses" onChange={changeInput} value="c++" checked={formInput.courses.includes("c++")} />C++
                <input type="checkbox" name="courses" onChange={changeInput} value="java" checked={formInput.courses.includes("java")} />Java
                <input type="checkbox" name="courses" onChange={changeInput} value="python" checked={formInput.courses.includes("python")} />Python
              </td>
            </tr>
            <tr>
              <td>City :-</td>
              <td>
                <select name="city" onChange={changeInput} value={formInput.city}>
                  <option value="">---Select City---</option>
                  <option value="surat">Surat</option>
                  <option value="rajkot">Rajkon</option>
                  <option value="vapi">Vapi</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </thead>
        </table>
        <br />
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Courses</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allrecord.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.username}</td>
                  <td>{val.useremail}</td>
                  <td>{val.userpassword}</td>
                  <td>{val.gender}</td>
                  <td>{val.courses.join(", ")}</td>
                  <td>{val.city}</td>
                  <td>
                    <button type="button" onClick={() => deleteUser(index)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Form

