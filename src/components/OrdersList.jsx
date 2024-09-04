import React, { useState } from 'react';
import './OrdersList.css';

const OrdersList = () => {
  // Sample data for orders (this would typically come from an API)
  const [orders, setOrders] = useState([
    { id: 1, cropName: 'Wheat', quantity: '100 kg', supplier: 'John Doe', status: 'Pending' },
    { id: 2, cropName: 'Rice', quantity: '200 kg', supplier: 'Jane Smith', status: 'Completed' },
    { id: 3, cropName: 'Corn', quantity: '150 kg', supplier: 'Mike Johnson', status: 'Pending' },
    { id: 4, cropName: 'Barley', quantity: '80 kg', supplier: 'Emily White', status: 'In Progress' },
  ]);

  // State to handle editing order
  const [editingOrder, setEditingOrder] = useState(null);
  const [newOrderData, setNewOrderData] = useState({ cropName: '', quantity: '', supplier: '', status: '' });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrderData({ ...newOrderData, [name]: value });
  };

  // Function to delete an order
  const deleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  // Function to save edited order data
  const saveOrder = () => {
    setOrders(orders.map(order => (order.id === editingOrder ? { ...order, ...newOrderData } : order)));
    setEditingOrder(null);
    setNewOrderData({ cropName: '', quantity: '', supplier: '', status: '' });
  };

  return (
    <div className="orders-list">
      <h2>Orders List</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Crop Name</th>
            <th>Quantity</th>
            <th>Supplier</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.cropName}</td>
              <td>{order.quantity}</td>
              <td>{order.supplier}</td>
              <td>{order.status}</td>
              <td>
                <button className="edit-button" onClick={() => setEditingOrder(order.id)}>Edit</button>
                <button className="delete-button" onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingOrder !== null && (
        <div className="edit-order-form">
          <h3>Edit Order</h3>
          <input
            type="text"
            name="cropName"
            placeholder="Crop Name"
            value={newOrderData.cropName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={newOrderData.quantity}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            value={newOrderData.supplier}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={newOrderData.status}
            onChange={handleInputChange}
          /><br/>
          <button className="save-button" onClick={saveOrder}>Save</button>
          <button className="cancel-button" onClick={() => setEditingOrder(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default OrdersList;
