import React, { useState } from 'react';
import './SupplierInventory.css';

const SupplierInventory = () => {
  // Initial mock data for inventory
  const initialInventory = [
    { id: 1, crop: 'Tomatoes', quantity: 100 },
    { id: 2, crop: 'Corn', quantity: 50 },
    { id: 3, crop: 'Potatoes', quantity: 75 },
  ];

  // State to manage inventory items
  const [inventory, setInventory] = useState(initialInventory);
  const [newCrop, setNewCrop] = useState('');  
  const [newQuantity, setNewQuantity] = useState('');  

  // Function to add a new item to the inventory
  const handleAddItem = () => {
    if (newCrop && newQuantity) {
      const newItem = {
        id: inventory.length + 1,
        crop: newCrop,
        quantity: parseInt(newQuantity, 10),
      };
      setInventory([...inventory, newItem]);
      setNewCrop(''); 
      setNewQuantity('');  
    }
  };

  // Function to remove an item from the inventory
  const handleRemoveItem = (id) => {
    const updatedInventory = inventory.filter((item) => item.id !== id);
    setInventory(updatedInventory);
  };

  // Function to edit an item quantity in the inventory
  const handleEditQuantity = (id, newQuantity) => {
    const updatedInventory = inventory.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setInventory(updatedInventory);
  };

  return (
    <div className="inventory-section">
      <h3>Inventory Management</h3>
      {/* Form to add a new item */}
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Crop Name"
          value={newCrop}
          onChange={(e) => setNewCrop(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* List of current inventory items */}
      <div className="inventory-list">
        {inventory.map((item) => (
          <div key={item.id} className="inventory-item">
            <p><strong>Crop:</strong> {item.crop}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            {/* Input to edit item quantity */}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleEditQuantity(item.id, parseInt(e.target.value, 10))}
            />
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierInventory;
