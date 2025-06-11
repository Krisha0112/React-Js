import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Adduser } from '../redux/action/crudAction'

const Add = () => {

    let dispatch = useDispatch()
    let navigate = useNavigate()

    let [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    let changeInput = (event) => {
        let { name, value } = event.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        let obj = {
            id: Date.now(),
            ...formInput
        }
        setFormInput({
            name: '',
            email: '', 
            password: ''
        })
        dispatch(Adduser(obj));
        navigate("/view")

    }

    return (
        <div align="center"  className="container">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" placeholder='Enter Name' name='name' value={formInput.name} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" placeholder='Enter Email' name='email' value={formInput.email} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" placeholder='Enter Password' name='password' value={formInput.password} onChange={changeInput} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <Link to={'/view'}>view</Link>
        </div>
    )
}

export default Add
