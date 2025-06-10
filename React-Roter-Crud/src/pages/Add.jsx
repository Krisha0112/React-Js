import React, { useState } from 'react'

function Add() {

    const [forminput, setFormInput] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        courses: [],
        city: '',
        dateOfjoin: ''
    })

    const changeInput = (e) => {
        const {name, value, type, checked} = e.target;

        if(type === "checkbox") {
            if(checked) {
                setFormInput({
                    ...forminput,
                    courses: [...forminput.courses, value]
                })
            }else{
                setFormInput({
                    ...forminput,
                    courses: [...forminput.courses].filter(val => val != value)
                })
            }
        }else{
            setFormInput({
                ...forminput, 
                [name]: value
            })
        }
    }

    const handeSubmit = (e) => {
        e.preventDefault()
        console.log(forminput);
        
    }

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handeSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <th>Field</th>
                            <th>Input</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" onChange={changeInput} placeholder='Enter Name' required /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="email" name="email" onChange={changeInput} placeholder='Enter Email' required /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" name="password" onChange={changeInput} placeholder='Enter Password' required /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name="gender" onChange={changeInput} value="male" required /> Male
                                <input type="radio" name="gender" onChange={changeInput} value="female" required /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>Courses</td>
                            <td>
                                <input type="checkbox" onChange={changeInput} name="courses" value="C" /> C
                                <input type="checkbox" onChange={changeInput} name="courses" value="C++" /> C++
                                <input type="checkbox" onChange={changeInput} name="courses" value="Java" /> Java
                                <input type="checkbox" onChange={changeInput} name="courses" value="Web Design" /> Web Design
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select onChange={changeInput} name="city">
                                    <option value="">- - - Select City - - -</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Dang">Dang</option>
                                    <option value="Vapi">Vapi</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Date of Joining</td>
                            <td><input type="date" onChange={changeInput} name="dateOfjoin" required /></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
    )
}

export default Add
