import React from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, onDelete }) => {
  return (
    <div>
      {cars.map(car => (
        <CarItem key={car.id} car={car} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CarList;