import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNavbar from '../components/admin/Admin-Navbar.js';
// import { encryptId, decryptId }  from '../salting.js';
import { API_URL } from '../utils/value.js'



//carform used
function CarForm () {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [gearbox, setGearbox] = useState('')
  const [fuel, setFuel] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [image, setImage] = useState('')
  const [available, setAvailable] = useState(true)

  const { id } = useParams()
  // const saltedId = saltAndHashId(id);
  // const desaltedId = decryptId(id);
  // alert(desaltedId);
  // alert(id);

  // console.log("did:", desaltedId);
  const isEdit = id !== undefined

  const navigate = useNavigate()

  useEffect(() => {
    if (isEdit) {
      // Fetch the car data by id from the server and set the form data
      axios
        .get(`${API_URL}/cars/${id}`)
        .then(res => {
          console.log('adsjf', res)
          const { brand, model, year, price, gearbox, fuel, image, available } =
            res.data

          console.log('data2', res.data)
          setBrand(brand)
          setModel(model)
          setYear(year)
          setPrice(price)
          setGearbox(gearbox)
          setFuel(fuel)
          setImage(image)
          setAvailable(available)

        })
        .catch(err => {
          console.error(err)
          alert('Error fetching car data')
          // navigate('/') // Navigate to home page
        })
    }
  }, [id, isEdit, navigate])

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('image', image);
    console.log('Brand', brand);
  
    const carData = new FormData();
    carData.append('brand', brand);
    carData.append('model', model);
    carData.append('year', year);
    carData.append('price', price);
    carData.append('gearbox', gearbox);
    carData.append('fuel', fuel);
    carData.append('available', available ? 1 : 0); // Convert boolean to integer
    if (image) {
      carData.append('image', image);
    }
    console.log('car', carData);
  
    try {
      const response = isEdit
        ? await axios.post(`${API_URL}/cars/edit/${id}`, carData)
        : await axios.post(`${API_URL}/cars/add`, carData);
  
        alert(`Car ${isEdit ? 'updated' : 'added'} successfully`);
        navigate('/admin'); // Navigate to home page
      // } else {
      //   console.log(response.data);
      //   alert(
      //     `Error ${isEdit ? 'updating' : 'adding'} car: ${response.data.message}`
      //   );
      // }
    } catch (error) {
      console.log(error.response.data);
      alert(`Error ${isEdit ? 'updating' : 'adding'} car`);
    }
  };
  
  return (
    <div className='main-AddCar'>
    <div className='form'>
      <AdminNavbar />
    <Form
      onSubmit={handleSubmit}
      encType='multipart/form-data'
      className='mx-auto mt-5 p-4 rounded'
    >
      <h2>{isEdit ? 'Update Car' : 'Add Car'}</h2>
      <Form.Group controlId='formBrand'>
        <Form.Label className='form-label'>Brand</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter brand'
          value={brand}
          onChange={event => setBrand(event.target.value)}
          className='form-control'
        />
      </Form.Group>
      <Form.Group controlId='formModel'>
        <Form.Label className='form-label'>Model</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter model'
          value={model}
          onChange={event => setModel(event.target.value)}
          className='form-control'
        />
      </Form.Group>
      <Form.Group controlId='formYear'>
        <Form.Label className='form-label'>Year</Form.Label>
        <Form.Control
          type='year'
          placeholder='Enter year'
          value={year}
          onChange={event => setYear(event.target.value)}
          className='form-control'
        />
      </Form.Group>
      <Form.Group controlId='formPrice'>
        <Form.Label className='form-label'>Price</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter price'
          value={price}
          onChange={event => setPrice(event.target.value)}
          className='form-control'
        />
      </Form.Group>
      <Form.Group controlId='formGearbox'>
        <Form.Label className='form-label'>Gearbox</Form.Label>
        <Form.Select
          value={gearbox}
          onChange={event => setGearbox(event.target.value)}
          className='form-control'
        > 
        <option value=''>Select Gearbox Type</option>
          <option value='Manual'>Manual</option>
          <option value='Automatic'>Automatic</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId='formFuel'>
        <Form.Label className='form-label'>Fuel</Form.Label>
        <Form.Select
          value={fuel}
          onChange={event => setFuel(event.target.value)}
          className='form-control'
        >
          <option value=''>Select Fuel</option>
          <option value='Petrol'>Petrol</option>
          <option value='Diesel'>Diesel</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId='formImage'>
        <Form.Label className='form-label'>Image</Form.Label>
        <Form.Control
          type='file'
          onChange={event => setImage(event.target.files[0])}
          className='form-control'
        />
      </Form.Group>

      <Form.Group controlId='formAvailable'>
        <Form.Check
          type='checkbox'
          label='Available'
          checked={available}
          onChange={event => setAvailable(event.target.checked)}
        />
      </Form.Group>

      <Button variant='primary' type='submit' className='btn-primary mt-3'>
        {isEdit ? 'Update' : 'Submit'}
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default CarForm
