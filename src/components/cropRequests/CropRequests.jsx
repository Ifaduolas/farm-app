import React, { useState } from 'react';
import './CropRequests.css';

const CropRequests = () => {
  // Mock data for crop requests
  const initialRequests = [
    { id: 1, farmerName: 'John Doe', crop: 'Tomatoes', quantity: 100, status: 'Pending' },
    { id: 2, farmerName: 'Jane Smith', crop: 'Corn', quantity: 50, status: 'Pending' },
    { id: 3, farmerName: 'Alice Johnson', crop: 'Potatoes', quantity: 75, status: 'Pending' },
  ];

  // State to manage crop requests
  const [requests, setRequests] = useState(initialRequests);

  // Function to accept a request
  const handleAccept = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: 'Accepted' } : request
    );
    setRequests(updatedRequests);
  };

  // Function to reject a request
  const handleReject = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="crop-requests-section">
      <h3>Crop Requests</h3>
      <div className="crop-requests-list">
        {requests.map((request) => (
          <div key={request.id} className="crop-request-card">
            <p><strong>Farmer Name:</strong> {request.farmerName}</p>
            <p><strong>Crop:</strong> {request.crop}</p>
            <p><strong>Quantity:</strong> {request.quantity}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <div className="actions">
              {/* Disable buttons if the request is already processed */}
              <button 
                onClick={() => handleAccept(request.id)} 
                disabled={request.status !== 'Pending'}
                className="accept-button"
              >
                Accept
              </button>
              <button 
                onClick={() => handleReject(request.id)} 
                disabled={request.status !== 'Pending'}
                className="reject-button"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropRequests;
