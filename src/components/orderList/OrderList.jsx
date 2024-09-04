import React from 'react';
import './OrderList.css';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      {orders.length === 0 ? (
        <p>No orders to display.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>
            <p><strong>Buyer:</strong> {order.buyerName}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Total Price:</strong> ${order.totalPrice}</p>
            <button className="contact-btn">Contact Buyer</button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
