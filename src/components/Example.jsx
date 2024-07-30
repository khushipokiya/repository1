import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Example.module.css';

const MyForm = ({ users, addUser, updateUser }) => {
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
    favoriteColor: '' // Default value
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({})

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

  const validate = () => {
    const newErrors = {};

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validate()) {
      // If validation passes, proceed with form submission
      if (id) {
        updateUser({ ...formData, id: parseInt(id) });
      } else {
        addUser({ ...formData, id: Date.now() });
      }
      navigate('/');
    }
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

        {/* password */}
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password">Password:</label>
          <div className={`${styles.passwordContainer}`}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.passwordToggle}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
        </div>

        {/* confirmPassword */}
        <div className={`${styles.formGroup}`}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div className={`${styles.passwordContainer}`}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <i
              className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.passwordToggle}`}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></i>
          </div>
          {errors.confirmPassword && (
            <p className={`${styles.error}`}>{errors.confirmPassword}</p>
          )}
        </div>

        {/* Email: */}
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
        {/* hobby */}
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
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
          </select>
        </div>

        <div className={`${styles.formGroup}`}>
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="Gujrat">Gujrat</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="MP">MP</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="J&K">J&K</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>
        </div>

        <div className={`${styles.formGroup}`}>
          <label htmlFor="favoriteColor">Favorite Color:</label>
          <div className={styles.colorPreview} style={{ backgroundColor: formData.favoriteColor }} />

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
          {id ? 'Update ' : 'Add '}
        </button>
      </form>
    </div>
  );
};

export default MyForm;
