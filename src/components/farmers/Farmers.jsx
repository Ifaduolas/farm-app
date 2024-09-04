import React, { useState } from 'react';
import './Farmers.css'; // Import the CSS file
import AddCropForm from '../addCropForm/AddCropForm';
import OrderList from "../orderList/OrderList"; 
import CropDetails from '../cropDetails/CropDetails';

const Farmers = () => {
    const [orders] = useState([]); 
    const [cropDetails] = useState('');
  // Sample data for crops (this would typically come from an API)
  const [crops, setCrops] = useState([
    { id: 1, name: 'Tomato', price: 200000, quantity: '100kg', description: 'Fresh organic tomatoes' },
    { id: 2, name: 'Maize', price: 150000, quantity: '200kg', description: 'Locally grown maize' },
    { id: 3, name: 'Wheat', price: 300000, quantity: '150kg', description: 'High-quality wheat grains' },
    { id: 4, name: 'Carrot', price: 100000, quantity: '50kg', description: 'Organic farm carrots' },
  ]);

  const addCrop = (newCrop) => {
    setCrops((prevCrops) => [...prevCrops, newCrop]);
  };

  

  // Function to remove a crop from the list
  const removeCrop = (cropId) => {
    setCrops(crops.filter(crop => crop.id !== cropId));
  };

  return (
    <div className="farmer-container">
      <h2 className="farmer-title">Farm Crops Available for Sale</h2>
      <div className="crop-list">
        {crops.map(crop => (
          <div key={crop.id} className="crop-card">
            <h3>{crop.name}</h3>
            <p>Price: ₦{crop.price} per unit</p>
            <p>Quantity: {crop.quantity}</p>
            <p>{crop.description}</p>
            <button className="remove-button" onClick={() => removeCrop(crop.id)}>Remove Crop</button>
            <AddCropForm addCrop={addCrop} />
            <OrderList orders={orders} />
            <CropDetails cropDetails={cropDetails}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farmers;
