import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import './Css/form.css';

function RentForm(props) {
  const [rentDate, setRentDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const userId = sessionStorage.getItem('userId');
  const Price = sessionStorage.getItem('Price');
  const navigate = useNavigate();

  const rentDateObj = new Date(rentDate);
  const returnDateObj = new Date(returnDate);
  const timeDiff = returnDateObj.getTime() - rentDateObj.getTime();
  const daysDiff = timeDiff / (1000 * 3600 * 24); // number of milliseconds in a day
  const totalPrice = daysDiff * Price;

  const { id: carId } = useParams();
  // alert(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('rent_date', rentDate);
    formData.append('return_date', returnDate);
    formData.append('car_id', carId);
    formData.append('user_id', userId);
    // formData.append('price', Price);

    axios
      .post('http://localhost:8000/api/rents/add', formData)
      .then((response) => {
        console.log(response.data);
        if(response.data.success===true){
          alert("Car Rented Sucessfully");
          navigate('/booked');
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="rent-form">
        <h2>Rent Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="rent-date">Rent Date:</label>
            <input
              type="date"
              className="form-control"
              id="rent-date"
              value={rentDate}
              onChange={(event) => setRentDate(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="return-date">Return Date:</label>
            <input
              type="date"
              className="form-control"
              id="return-date"
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Pay {totalPrice}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RentForm;
