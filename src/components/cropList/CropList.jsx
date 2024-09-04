import React from "react"
import "./CropList.css"


const CropList = ({ crops }) => {
    return (
        <div className="crop-list">
            {crops?.length === 0 ? (
                <p>No crops available. Add a crop to get started.</p>
            ) : (
                crops?.map((crop) => (
                    <div key={crop.id} className="crop-card">
                        <h3>{crop.name}</h3>
                        <p><strong>Price:</strong> {crop.price}</p>
                        <p><strong>Quantity:</strong> {crop.quantity}</p>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                    </div>    
                ))
            )}
        </div>
    )
}

export default CropList;