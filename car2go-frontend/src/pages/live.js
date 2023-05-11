import axios from 'axios';
import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/admin/Admin-Navbar.js';
import Footer from '../components/footer.js';


import './css/cars.css'

function LiveRented () {
  const [cars, setCars] = useState([])


  const isAdmin = sessionStorage.getItem('admin');
  
  useEffect(() => {
    if(!isAdmin){
      alert("Unauthorized User");
      window.location.href = '/login';
    }
    axios
      .get('http://localhost:8000/api/live')  //data fetch from rent 
      .then(response => {
        setCars(response.data)
        console.log(response.data)

      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div className='conatiner-live'>
    <div className='main-cars'>
     <AdminNavbar />
         <h1 style={{ textAlign: 'center', margin:"10px" }}>Booked Cars</h1>
      <div className='product-list'>
     
        {cars.map(car => (
          <div className='product' key={car.id}>
            <h3>
              {car.brand} {car.model}
            </h3>
            <img
              id='img'
              src={`http://localhost:8000/storage/${car.image}`}
              alt={car.name}
            />
            <p>{car.fuel}</p>
            <p>{car.price} Rs Per day</p>
            <p>Rented By {car.user_name}</p>
            <p>Rented For {car.rent_duration} days</p>
            <p>Rented Till {car.return_date}</p>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default LiveRented

