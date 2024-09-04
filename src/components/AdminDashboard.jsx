import React from 'react';
import UserManagement from "../components/UserManagement"; // Component to manage users
import DashboardLayout from "../components/dashboardLayout/DashboardLayout";


const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <h1>Admin Dashboard</h1>
      <UserManagement />
    </DashboardLayout>
  );
};

export default AdminDashboard;
