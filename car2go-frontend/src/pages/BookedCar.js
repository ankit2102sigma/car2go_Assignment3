import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Booked() {
  const [data, setData] = useState([]);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/crondata?userid=${userId}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  const handleEndRide = async (carId) => {
    if (window.confirm("Are you sure you want to end this ride?")) {
      try {
        const response = await axios.post(`http://localhost:8000/api/remove/${carId}`);
        console.log(response.data);
        // Remove the car from the booked list
        setData(data.filter((car) => car.id !== carId));
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <div className='booked-main'>

        <div className="product-list">
            {data.map((product) => (
                <div className="product" key={product.id}>
                    <h3>{product.brand}{product.model}</h3>
                    <img id="img"  src={`http://localhost:8000/storage/${product.image}`}  alt={product.name} />
                    <p>{product.fuel}</p>
                    <p>{product.price} Rs</p>
                    <button onClick={() => handleEndRide(product.id)}>End Ride</button>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Booked;
