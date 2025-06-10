import React from 'react'
import { Link } from 'react-router'

function View() {
  return (
    <div align="center">
      <h1>View User</h1>
      <div>
        <form>
          <table border={1}>
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Action</td>
              </tr>
            </thead>
          </table>
        </form>
      </div>

      <Link to="/add">Add</Link>
    </div>
  )
}

export default View
