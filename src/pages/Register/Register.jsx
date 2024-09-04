import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration login here
    console.log('User registered with role!', role);
  };

  const switchToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2 className="title">Farmer & Supplier Registration</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Select your role</option>
            <option value="farmer">Farmer</option>
            <option value="supplier">Supplier</option>
            <option value="newCustomer">New Customer</option>
          </select>
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="switch-text">
        Already have an account?{' '}
        <span className="switch-link" onClick={switchToLogin}>
          Login here
        </span>.
      </p>
    </div>
  )
}

export default Register