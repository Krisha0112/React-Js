import React from 'react'

function Form({ handleSubmitFun, formInput, changeInputFun }) {

  return (
    <div align="center">
      <h1>Add User</h1>
      <form>
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" placeholder="Enter your name" onChange={changeInputFun} value={formInput.name} name="uername" />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="email" placeholder="Enter your email" onChange={changeInputFun} value={formInput.email} name="useremail" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" placeholder="Enter your password" onChange={changeInputFun} value={formInput.password} name="userpassword" />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
              </td>
            </tr>
            <tr>
              <td>Courses</td>
              <td>
                <input type="checkbox" name="course" value="java" />Java
                <input type="checkbox" name="course" value="python" />Python
                <input type="checkbox" name="course" value="c" />C
                <input type="checkbox" name="course" value="c++" />C++
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <select name="city">
                  <option value="">----- Select City -----</option>
                  <option value="surat">Surat</option>
                  <option value="vapi">Vapi</option>
                  <option value="dang">Dang</option>
                  <option value="rajkot">Rajkot</option>
                  <option value="bhavnagar">Bhavnagar</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" onClick={() => handleSubmitFun()} />
              </td>
            </tr>
          </thead>
        </table>
      </form>
      <br />
      <hr />
    </div>
  )
}

export default Form
