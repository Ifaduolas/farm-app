import React from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

 const gotToNewPage = () => {
    navigate("/farmer")
  }

  const NewPage = () => {
    navigate("/admin")
  }

  const goToNewPage = () => {
    navigate("/supplier")
  }



  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-section">
        <div className="dashboard-card">
          <h2>Manage Farmer</h2>
          <p>View, add, or update farmer available for crops.</p>
         <button onClick={() => gotToNewPage()} className="button-manage">Go to Farmer</button>
        </div>
        <div className="dashboard-card">
          <h2>Viewing  AdminDashboard</h2>
          <p>View and manage supplier require  farm crops.</p>
          <button onClick={() => NewPage()} className="button-manage">Go to AdminDashboard</button>
        </div>
        <div className="dashboard-card">
          <h2>Manage Supplier</h2>
          <p>View and manage registered supplier.</p>
          <button onClick={() => goToNewPage()} className="button-manage">Go to Supplier</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;

