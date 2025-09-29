import { useState } from 'react';
import CarList from './components/CarList';
import carsData from './components/cars';

function App() {
  const [cars, setCars] = useState(carsData);

  const deleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <div>
      <h1>Car Showroom</h1>
      <CarList cars={cars} onDelete={deleteCar} />
    </div>
  );
}

export default App;