import { useState } from "react"

function App() {

  const [formInput, setFormInput] = useState({
    username: "", 
    useremail : "",
    userpassword: "",
    gender: "",
    courses: [],
    city: ""
  })

  const [formError, setFormError] = useState({
    username: "", 
    useremail : "",
    userpassword: "",
    gender: "",
    courses: [],
    city: ""
  })

  const changeInput = (e) => {
    const {name, value, type, checked} = e.target
    if(type == "checkbox") {
      if(checked) {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses, value]
        })
      }
      else{
        setFormInput({
          ...formInput,
          courses: [...formInput.courses].filter(val => val != value)
        })
      }
    }else{
      setFormInput ({
        ...formInput,
        [name] : value
      })
    }
  }

  const formValidation = () => {
    let check = true;
    const errors = {
     username: "", 
    useremail : "",
    userpassword: "",
    gender: "",
    courses: [],
    city : ""
    }
    if(!formInput.username) {
      errors.username = "name is required"
      check = false
    }
    if(!formInput.useremail) {
      errors.useremail = "email is required"
      check = false
    }
    if(!formInput.userpassword) {
      errors.userpassword = "password is required"
      check = false
    }
      if(!formInput.gender) {
      errors.gender = "gender is required"
      check = false
    }
      if(!formInput.courses) {
      errors.courses = "courses is required"
      check = false
    }
    setFormError(errors)
    return check
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValidation()) {
      console.log(formInput);
      alert("Form Submited")
      setFormInput({
        username: "",
        useremail: "",
        userpassword: "",
        gender: "",
        courses: [],
        city : ""
      })
    }  
    
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
                <input type="text" name="username" value={formInput.username} onChange={changeInput} placeholder="Enter your name"/>
                {
                  formError.username && (
                    <span style={{color: "red"}}>Name is required....!</span>
                  )
                }
                </td>
            </tr>
            <tr>
              <td>Email :- </td>
              <td>
                <input type="email" name="useremail" onChange={changeInput} value={formInput.useremail} placeholder="Enter your email" />
                {
                  formError.useremail && (
                    <span style={{color: "red"}}>Email id require.....!</span>
                  )
                }
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
                <input type="checkbox" name="courses" onChange={changeInput} value="c++" checked={formInput.courses.includes("c++")}  />C++
                <input type="checkbox" name="courses" onChange={changeInput} value="java" checked={formInput.courses.includes("java")}  />Java
                <input type="checkbox" name="courses" onChange={changeInput} value="python" checked={formInput.courses.includes("python")}  />Python
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
              <td><input type="submit" name="" id="" /></td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  )
}

export default App
