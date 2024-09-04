import React from 'react';
import CropList from "../cropList/CropList"; // Component to list crops
import DashboardLayout from "../dashboardLayout/DashboardLayout";

const FarmerDashboard = () => {
  return (
    <DashboardLayout>
      <h1>Farmer Dashboard</h1>
      <CropList />
    </DashboardLayout>
  );
};

export default FarmerDashboard;
