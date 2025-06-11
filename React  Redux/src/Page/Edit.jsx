import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Updateuser } from '../redux/action/crudAction';

const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const single = useSelector(state => state.crud.single);

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        if (single) {
            setFormInput({
                name: single.name || '',
                email: single.email || '',
                password: single.password || ''
            });
        }
    }, [single]);

    const changeInput = (event) => {
        const { name, value } = event.target;
        setFormInput(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedUser = {
            id: single.id, 
            ...formInput
        };

        dispatch(Updateuser(updatedUser));
        navigate('/view');
    };

    return (
        <div align="center"  className="container">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={formInput.name}
                                    onChange={changeInput}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={formInput.email}
                                    onChange={changeInput}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input
                                    type="password"
                                    name="password"
                                    value={formInput.password}
                                    onChange={changeInput}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" value="Update" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <br />
            <Link to="/view">Go to View Page</Link>
        </div>
    );
};

export default Edit;
