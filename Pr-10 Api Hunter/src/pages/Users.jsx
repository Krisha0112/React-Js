import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action/userActions"; // 👈 action file
import "../App.css";

const Users = () => {
  const dispatch = useDispatch();
  const { users, error } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="recipes-container">
        <h2 className="recipes-heading">👥 Users</h2>
        {error && <p className="error-text">Error: {error}</p>}

        {users.length === 0 ? (
          <p className="loading-text">Loading users...</p>
        ) : (
          <div className="recipes-grid">
            {users.map((user) => (
              <div key={user.id} className="recipe-card">
                <img src={user.image} alt={user.firstName} className="recipe-image" />
                <h3>{user.firstName} {user.lastName}</h3>
                <p>📧 {user.email}</p>
                <p>📞 {user.phone}</p>
                <p>🎂 Age: {user.age}</p>
                <p>🚻 Gender: {user.gender}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
