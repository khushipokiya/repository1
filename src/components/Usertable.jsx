import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Example.module.css';

const UserTable = ({ users, deleteUser }) => {
   
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
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.firstname || 'N/A'}</td>
                <td>{user.lastname || 'N/A'}</td>
                <td>{user.password || 'N/A'}</td>
                <td>{user.confirmPassword || 'N/A'}</td>
                <td>{user.email || 'N/A'}</td>
                <td>{user.hobby || 'N/A'}</td>
                <td>{user.age || 'N/A'}</td>
                <td>{user.city || 'N/A'}</td>
                <td>{user.country || 'N/A'}</td>
                <td>{user.state || 'N/A'}</td>
                <td>{user.favoriteColor || 'N/A'}</td>
                <td>
                  <Link to={`/edit/${user.id}`} >Edit</Link>
                  </td>
                  <td>
                  <Link to={`/delete/${user.id}`} >Delete</Link>
                  </td>
                  {/* <button  className={`${styles.deleteButton}`}>Delete</button> */}
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
