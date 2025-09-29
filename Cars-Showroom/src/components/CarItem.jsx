import React from 'react';

const CarItem = ({ car, onDelete }) => {
  return (
    <div className="car-item">
      <h2>{car.brand} {car.model}</h2>
      <p>ID: {car.id}</p>
      <p>Price: ${car.price}</p>
      <button onClick={() => onDelete(car.id)} className='delete-button'>Delete</button>
    </div>
  );
};

export default CarItem;