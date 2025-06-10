import React from 'react'
import { Link } from 'react-router'

function Add() {
  return (
    <div align="center">
      <h1>Add User</h1>

    <div>
      <form>
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>
                <input type="text" placeholder='Enter Name' />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="text" placeholder='Enter Email' />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" placeholder='Enter Password' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="Submit" />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>



    <Link to="/">View</Link>
    </div>
  )
}

export default Add
