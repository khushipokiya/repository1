// import React, { useState } from 'react';
import styles from './Example.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MyForm = ({ users, addUser, updateUser}) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    hobby: '',
    age: '',
    city: '',
    country: 'USA', // Default value
    state: 'Gujrat', // Default value
    favoriteColor: '#000000' // Default value
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = users.find(user => user.id === parseInt(id));
      if (user) {
        setFormData(user);
      }
    }
  }, [id, users]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateUser({ ...formData, id: parseInt(id) });
    } else {
      addUser({ ...formData, id: Date.now() });
    }
    navigate('/');
  };
 

  return (
    <div className={`${styles.container}`} >
      <form onSubmit={handleSubmit} className={`${styles.form}`}>

        <div className={`${styles.formGroup}`}>
          <label htmlFor="firstname" className={`${styles.formGroup}`}>firstname:  </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="lastname" >lastname:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password" >Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="confirmpassword"  > Confirm password:</label>
          <input
            type="password"
            id="pwd"
            name="confirmpassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="email" >Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="hobby">Hobby:</label>
          <input
            type="text"
            id="hobby"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className={`${styles.formGroup}`}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="country">Country:</label>

          <select value={formData.country} name="country" id="country"onChange={handleChange} >
            <option value={formData.country} >USA</option>
            <option value={formData.country} >India</option>
            <option value={formData.country} >Canada</option>
            <option value={formData.country} >china</option>
            <option value={formData.country} >Pakistan</option>
            <option value={formData.country} >Nepal</option>

          </select>
        </div>
        <div className={`${styles.formGroup}`} >
          <label htmlFor="country">State:</label>

          <select value={formData.state} name="State" id="State"onChange={handleChange}>
            <option value="Gujrat">Gujrat</option>
            <option value="maharashtra">maharashtra</option>
            <option value="MP">MP</option>
            <option value="Uttarpradesh">Uttarpradesh</option>
            <option value="J&K">J&K</option>
            <option value="Rajsthan">Rajsthan</option>
          </select>
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="favoriteColor">Favorite Color:</label>
          <input
            type="color"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={`${styles.submitButton}`}>Submit</button>
        <button type="submit" className={`${styles.submitButton}`}>
          {id? 'Update ' : 'Add '}
        </button>
      </form>
    </div>
  );
};

export default MyForm;
