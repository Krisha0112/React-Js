import React, { useState } from 'react'

function Form() {

    const [formInput, setFormInput] = useState({
        username : "",
        useremail : "",
        userpassword : "",
        gender : "",
        courses : [],
        city: ""
    })

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
         e.preventDefault()
        console.log(formInput);
        
    }

  return (
    <div align="center">
      <h1>Add User</h1>
      <form>
        <table border={1}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>
                        <input type="text" placeholder="Enter your name" name="username" onChange={changeInput} />
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input type="email" placeholder="Enter your email" name="useremail" onChange={changeInput} />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type="password" placeholder="Enter your password" name="userpassword"  onChange={changeInput} />
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <input type="radio" name="male" onChange={changeInput} value="male" /> Male
                        <input type="radio" name="female" onChange={changeInput} value="female" /> Female
                    </td>
                </tr>
                <tr>
                    <td>Courses</td>
                    <td>
                        <input type="checkbox" value="java"  onChange={changeInput} checked={formInput.courses.includes("java")}  />Java
                        <input type="checkbox" value="c" onChange={changeInput} checked={formInput.courses.includes("c")} />C
                        <input type="checkbox" value="c++" onChange={changeInput} checked={formInput.courses.includes("c++")} />C++
                        <input type="checkbox" value="python" onChange={changeInput} checked={formInput.courses.includes("python")} />Python
                    </td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>
                        <select name="city" onChange={changeInput}>
                            <option>---Select City---</option>
                            <option value="surat">Surat</option>
                            <option valuue="vapi">Vapi</option>
                            <option value="rajkot">Rajkot</option>
                            <option value="mumbai">Mumbai</option>
                        </select> 
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" onClick={() => handleSubmit()} />
                    </td>
                </tr>
            </thead>
        </table>
      </form>
    </div>
  )
}

export default Form
