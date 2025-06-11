import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteuser, Edituser } from '../redux/action/crudAction';

const View = () => {
    const user = useSelector((state) => state.crud.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editUser = (id) => {
        navigate(`/edit/${id}`);
        dispatch(Edituser(id));
    };

    return (
        <div align="center"  className="container">
            <h1>View User</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, i) => {
                            let { id, name, email, password } = val
                            return (
                                <tr key={i}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td className="action-buttons">
                                        <button onClick={() => dispatch(deleteuser(id))}>Delete</button>
                                        <button onClick={() => editUser(id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <Link to="/add">Add</Link>
        </div>
    );
};

export default View;
