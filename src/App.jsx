import { useState } from 'react'

import MyForm from './components/Example'
import UserTable from './components/Usertable'
import styles from './components/Example.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [users, setUsers] = useState([]);
 
      
 
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Router>
      <div className={`${styles.container}`} >
        <h1>User Management</h1>
        <Routes>
          <Route
            path="/"
            element={<UserTable users={users} deleteUser={deleteUser}/>}
          />
          {/* <Route
            path="/users"
            element={<UserTable users={users} />}
          />
          <Route
            path="/delete"
            element={<UserTable users={users} />}
          /> */}
          <Route
            path="/add"
            element={<MyForm users={users} addUser={addUser} updateUser={updateUser} />}
          />
          <Route
            path="/edit/:id"
            element={<MyForm users={users} addUser={addUser} updateUser={updateUser} />}
          />
        </Routes>
      </div>
      
    </Router>
    
    
  );
};
 
 
   


export default App
