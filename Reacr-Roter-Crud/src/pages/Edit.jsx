import React from 'react'

function Edit() {
    return (
        <div align="center">
            <h1>Edit User</h1>
            <form action="#" method="post">
                <table border={1}>
                    <tbody><tr>
                        <th>Field</th>
                        <th>Input</th>
                    </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" required /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="email" name="email" required /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" name="password" required /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name="gender" defaultValue="male" required /> Male
                                <input type="radio" name="gender" defaultValue="female" required /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>Courses</td>
                            <td>
                                <input type="checkbox" name="courses" defaultValue="C" /> C
                                <input type="checkbox" name="courses" defaultValue="C++" /> C++
                                <input type="checkbox" name="courses" defaultValue="Java" /> Java
                                <input type="checkbox" name="courses" defaultValue="Web Design" /> Web Design
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="city">
                                    <option value="">- - - Select City - - -</option>
                                    <option value="losangeles">Surat</option>
                                    <option value="chicago">Rajkot</option>
                                    <option value="chicago">Dang</option>
                                    <option value="miami">Vapi</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Date of Joining</td>
                            <td><input type="date" name="dateofjoin" required /></td>
                        </tr>
                    </tbody></table>
                <br />
                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
    )
}

export default Edit
