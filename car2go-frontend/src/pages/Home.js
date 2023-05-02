import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import ProductSlider from '../components/slider.js';

import './css/Carcard.css';

function CarCards() {



//   const [isHovered, setIsHovered] = useState(false);
  
//   return (

  
//     <Card className="car-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//       <div className="car-image-container">
//         <Card.Img className="car-image" variant="top" src={`http://localhost:8000/storage/${car.image}`} alt="car image" /> 
//         {isHovered && <div className="overlay">
//           <Button className="rent-now-button" variant="primary" disabled={!car.available}>Rent Now</Button>
//         </div>}
//       </div>
//       <Card.Body>
//         <Card.Title>{car.brand} {car.model}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{car.year}</Card.Subtitle>
//         <Card.Text>
//           <span className="car-info-label">Gearbox:</span> {car.gearbox}<br />
//           <span className="car-info-label">Fuel:</span> {car.fuel}<br />
//           <span className="car-info-label">Price:</span> {car.price}<br />
//           <span className="car-info-label">Top Speed:</span> {car.topSpeed}<br />
//           <span className="car-info-label">Acceleration:</span> {car.acceleration}<br />
//           <span className="car-info-label">Horsepower:</span> {car.horsepower}<br />
//         </Card.Text>
//       </Card.Body>
//     </Card>
    
//   );
// }

// function CarCards() {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(`http://localhost:8000/api/cars`);
//       setCars(response.data);
//     }
//     fetchData();
//   }, []);

  return (
    <div>
    <Navbar />
    <Header />
    <ProductSlider />
    {/* <div className="car-cards-container">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div> */}
    <Footer />
    </div>
  );
}

export default CarCards;
