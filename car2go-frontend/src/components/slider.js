import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './Css/ProductSlider.css'
import axios from 'axios'


const ProductSlider = () => {
    const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const [cars, setCars] = useState([])

  useEffect(() => {
    async function fetchData () {
      const response = await axios.get(`http://localhost:8000/api/cars`)
      setCars(response.data)
    }
    fetchData()
  }, [])

  const handleSubmit = () => {
    navigate('/cars');
  }

  return (
    <div className='slider-main'>
      <div className='mt-4'>
        <h1>Rent Your Dream Car</h1>
      </div>
      <div className='main-slider'>
        <Carousel responsive={responsive}>
          {cars.map(car => (
            <div className='card' key={car.id}>
              <img
                id='image_sldier'
                src={`http://localhost:8000/storage/${car.image}`}
                alt={car.name}
              />
              <h2>
                {car.brand} {car.model}
              </h2>
              <h5>{car.year}</h5>
              <p className='Fue'>{car.fuel}</p>
              <p className='price'>Rs {car.Price}</p>
              <p>
                <button
                  onClick={() => {
                    handleSubmit()
                  }}
                >
                  View More
                </button>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ProductSlider
