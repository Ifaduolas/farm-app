import React, { useState } from "react"
import "./AddCropForm.css"

const AddCropForm = ({ addCrop }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCrop = { id: Date.now(), name, price, quantity };
        addCrop(newCrop);
        setName('');
        setPrice('');
        setQuantity('');
    };

    return (
        <form className="add-crop-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Crop Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <input type="number" placeholder="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            <button type="submit" className="add-btn">Add Crop</button>
        </form>
    );
};

export default AddCropForm