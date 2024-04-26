// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css'; // Import your CSS file for styling

// const Login = () => {
//   const [data, setData] = useState({
//     email: '',
//     password: ''
//   });

//   const changeHandler = e => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submitHandler = e => {
//     e.preventDefault();
//     console.log(data);
//     // Your axios.post logic here
//   };

//   return (
//     <div className="login-container">
//       <div className="login-details">
//         <nav className="navbar bg-dark">
//           <h1>
//             <Link to="/">
//               <i className="fas fa-code"></i> Schools Hub
//             </Link>
//           </h1>
//           <ul>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>
//         <section className="container">
//           <h1 className="large text-primary">Sign In</h1>
//           <p className="lead">
//             <i className="fas fa-user"></i> Sign into Your Account
//           </p>
//           <form className="form" onSubmit={submitHandler} autoComplete="off">
//             <div className="form-group">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 name="email"
//                 onChange={changeHandler}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onChange={changeHandler}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Select Position:</label>
//               <select name="userType" onChange={changeHandler} required>
//                 <option value="">Select Position</option>
//                 <option value="student">Student</option>
//                 <option value="teacher">Teacher</option>
//                 <option value="administration">Administration</option>
//                 <option value="parent">Parent</option>
//               </select>
//             </div>
//             <input type="submit" className="btn btn-primary" value="Login" />
//           </form>
//           <p className="my-1">
//             Don't have an Account? <Link to="/register">Sign Up</Link>
//           </p>
//         </section>
//       </div>
//       <div className="login-image">
//         {/* Image */}
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    userType: '' // Add userType to state
  });

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      // Send a POST request based on selected userType
      if (data.userType === 'student') {
        await axios.post('http://localhost:3000/login/student', data);
      } else if (data.userType === 'teacher') {
        await axios.post('http://localhost:3000/login/teacher', data);
      } else if (data.userType === 'administration') {
        await axios.post('http://localhost:3000/login/admin', data);
      } else if (data.userType === 'parent') {
        await axios.post('http://localhost:3000/login/parent', data);
      } else {
        // Handle invalid userType
        console.error('Invalid userType');
        return;
      }
      console.log('Login successful');
      // Here you can redirect the user to a dashboard or perform any other necessary actions
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle any errors from the backend
    }
  };

  return (
    <div className="login-container">
      <div className="login-details">
        <nav className="navbar bg-dark">
          <h1>
            <Link to="/">
              <i className="fas fa-code"></i> Schools Hub
            </Link>
          </h1>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <section className="container">
          <h1 className="large text-primary">Sign In</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Sign into Your Account
          </p>
          <form className="form" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group">
              <label>Select Position:</label>
              <select name="userType" onChange={changeHandler} required>
                <option value="">Select Position</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="administration">Administration</option>
                <option value="parent">Parent</option>
              </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          <p className="my-1">
            Don't have an Account? <Link to="/register">Sign Up</Link>
          </p>
        </section>
      </div>
      <div className="login-image">
        {/* Image */}
      </div>
    </div>
  );
};

export default Login;
