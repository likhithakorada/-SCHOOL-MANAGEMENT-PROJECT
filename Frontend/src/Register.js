

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './Register.css'; // Import your CSS file for styling

const Register = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    confirmpassword: ''
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend endpoint for registering a student
      await axios.post('http://localhost:3000/register', data);
      console.log('User registered successfully');
      // Here you can redirect the user to a login page or do any other necessary actions
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle any errors from the backend
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={submitHandler} autoComplete="off">
          <div className="form-group">
            <input type="text" placeholder="Name" name="fullname" onChange={changeHandler} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" onChange={changeHandler} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Mobile" name="mobile" onChange={changeHandler} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" onChange={changeHandler} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={changeHandler} />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
      <div className="register-image">
        {/* Image */}
      </div>
    </div>
  );
}

export default Register;
