import React from 'react'

function View() {
  return (
    <div align="center">
      <h1>View User</h1>
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
      </table>
    </div>
  )
}

export default View
