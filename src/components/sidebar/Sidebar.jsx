import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  }

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <NavLink to="/farmers" activeclassname="active-link">
            Farmers
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/supplier" activeclassname="active-link">
            Supplier
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/customer" activeclassname="active-link">
            New Customer
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeclassname="active-link">
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeclassname="active-link">
            Settings
          </NavLink>
        </li>

      </ul>
      <div className="back-arrow" onClick={handleBack}>
          <ArrowBackIcon size={20}/>
          <span>Back to Home</span>
      </div>
    </div>
  );
};

export default Sidebar;