import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.js'
import RentForm from '../components/form.js'
import './css/cars.css'

function RentList () {
  const [cars, setCars] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/rents')  //data fetch from rent 
      .then(response => {
        setCars(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const rentCar = car => {
    setSelectedCar(car)
  }

  const submitRentForm = (carId, userId) => {
   
    // Call the API to rent the selected car
    axios
      .post('http://localhost:8000/api/rents', {
        car_id: carId,
        user_id: userId
      })
      .then(response => {
        console.log(response.data)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
        navigate('/')
      })
  }

  return (
    <div className='main-cars'>
      <Navbar />
      {selectedCar && (
        <RentForm
          car={selectedCar}
          onSubmit={(carId, userId) => submitRentForm(carId, userId)}
          onClose={() => setSelectedCar(null)}
          userId={1}
        />
      )}
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
            <button
              onClick={() => {
                sessionStorage.setItem('Price', car.price)
                navigate(`/form/${car.id}`)
                rentCar(car)
              }}
            >
              Rent Car
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RentList
