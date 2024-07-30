import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Example.module.css';

const UserTable = ({ users, deleteUser}) => {
 
  
   
  return (
    <div className={`${styles.container}`}>
      <Link to="/add">Add New User</Link>
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Email</th>
            <th>Hobby</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
            <th>State</th>
            <th>Favorite Color</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td data-label="Firstname">{user.firstname || 'N/A'}</td>
                <td data-label="Lastname">{user.lastname || 'N/A'}</td>
                <td data-label="Password">{user.password || 'N/A'}</td>
                <td data-label="Confirm Password">{user.confirmPassword || 'N/A'}</td>
                <td data-label="Email">{user.email || 'N/A'}</td>
                <td data-label="Hobby">{user.hobby || 'N/A'}</td>
                <td data-label="Age">{user.age || 'N/A'}</td>
                <td data-label="City">{user.city || 'N/A'}</td>
                <td data-label="Country">{user.country || 'N/A'}</td>
                <td data-label="State">{user.state || 'N/A'}</td>
                <td data-label="Favorite Color">{user.favoriteColor || 'N/A'}</td>
                <td data-label="Actions">
                  <Link to={`/edit/${user.id}`}>Edit</Link>
                </td>
                <td data-label="Actions">
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="13">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
