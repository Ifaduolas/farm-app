import React, { useState } from 'react';
import SupplierInventory from "../supplierInventory/SupplierInventory";  
import SupplierOrders from "../supplierOrders/SupplierOrders";  
import CropRequests from "../cropRequests/CropRequests";  
import './Supplier.css';  

const Supplier = () => {
  const [activeSection, setActiveSection] = useState('Inventory');  

  // Function to render different sections based on user selection
  const renderSection = () => {
    switch (activeSection) {
      case 'Inventory':
        return <SupplierInventory />;
      case 'Orders':
        return <SupplierOrders />;
      case 'Crop Requests':
        return <CropRequests />;
      default:
        return <SupplierInventory />;
    }
  };

  return (
    <div className="supplier-container">
      {/* Navigation bar for supplier actions */}
      <div className="supplier-nav">
        <button onClick={() => setActiveSection('Inventory')}>Inventory</button>
        <button onClick={() => setActiveSection('Orders')}>Orders</button>
        <button onClick={() => setActiveSection('Crop Requests')}>Crop Requests</button>
      </div>
      {/* Render the active section */}
      <div className="supplier-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default Supplier;
