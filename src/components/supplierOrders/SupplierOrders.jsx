import React, { useState } from 'react';
import './SupplierOrders.css';

const SupplierOrders = () => {
  // Mock data for orders
  const initialOrders = [
    { id: 1, farmerName: 'John Doe', crop: 'Tomatoes', quantity: 50, status: 'Pending' },
    { id: 2, farmerName: 'Jane Smith', crop: 'Corn', quantity: 30, status: 'Pending' },
    { id: 3, farmerName: 'Alice Johnson', crop: 'Potatoes', quantity: 100, status: 'Pending' },
  ];

  // State to manage orders
  const [orders, setOrders] = useState(initialOrders);

  // Function to mark an order as fulfilled
  const handleFulfillOrder = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: 'Fulfilled' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-section">
      <h3>Orders List</h3>
      {/* List of current orders */}
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <p><strong>Farmer Name:</strong> {order.farmerName}</p>
            <p><strong>Crop:</strong> {order.crop}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Status:</strong> {order.status}</p>
            {/* Button to mark order as fulfilled */}
            <button
              onClick={() => handleFulfillOrder(order.id)}
              disabled={order.status === 'Fulfilled'}
              className="fulfill-button"
            >
              {order.status === 'Fulfilled' ? 'Fulfilled' : 'Mark as Fulfilled'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierOrders;
