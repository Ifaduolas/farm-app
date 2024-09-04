import React, { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate =  useNavigate();

    const [role, setRole] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('User logged in with role!', role);
    };

    const switchToRegister = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <h2 className="title">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required/>
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
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="switch-text">
                Don't have account?{' '}
                <span className="switch-link" onClick={switchToRegister}>
                    Register here
                </span>.
            </p>
        </div>
    )
}

export default Login