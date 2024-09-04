import React, { useState } from 'react';
import './NewCustomer.css';

const Customer = () => {
  // Initial mock data for customers
  const initialCustomers = [
    { id: 1, name: 'Alice Brown', contact: 'alice.brown@example.com', location: 'New York' },
    { id: 2, name: 'Bob Smith', contact: 'bob.smith@example.com', location: 'Los Angeles' },
    { id: 3, name: 'Charlie Johnson', contact: 'charlie.johnson@example.com', location: 'Chicago' },
  ];

  // State to manage customers
  const [customers, setCustomers] = useState(initialCustomers);
  const [newCustomer, setNewCustomer] = useState({ name: '', contact: '', location: '' });

  // Function to handle input changes for new customer form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  // Function to add a new customer
  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.contact && newCustomer.location) {
      const newCustomerData = {
        id: customers.length + 1,
        ...newCustomer,
      };
      setCustomers([...customers, newCustomerData]);
      setNewCustomer({ name: '', contact: '', location: '' });  // Reset form
    }
  };

  // Function to delete a customer
  const handleDeleteCustomer = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  return (
    <div className="customer-section">
      <h3>Customer Management</h3>
      {/* Form to add a new customer */}
      <div className="add-customer-form">
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={newCustomer.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="contact"
          placeholder="Contact Information"
          value={newCustomer.contact}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newCustomer.location}
          onChange={handleInputChange}
        />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>

      {/* List of current customers */}
      <div className="customer-list">
        {customers.map((customer) => (
          <div key={customer.id} className="customer-card">
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Contact:</strong> {customer.contact}</p>
            <p><strong>Location:</strong> {customer.location}</p>
            <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
