import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CropDetails.css';

const CropDetails = () => {
  const { id } = useParams(); // Get the crop ID from the URL
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch crop details from the API
    axios.get(`/api/crops/${id}`)
      .then(response => {
        setCrop(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching crop details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="crop-details">
      <h2>{crop.name}</h2>
      <img src={crop.imageUrl} alt={crop.name} className="crop-image" />
      <p><strong>Description:</strong> {crop.description}</p>
      <p><strong>Price:</strong> ${crop.price} per {crop.unit}</p>
      <p><strong>Quantity Available:</strong> {crop.quantity} {crop.unit}</p>
      <p><strong>Seller Contact:</strong> {crop.sellerContact}</p>
      <button className="order-btn">Place Order</button>
      {/* Optionally, add more features such as "Contact Seller" or "View Seller Profile" */}
    </div>
  );
};

export default CropDetails;
