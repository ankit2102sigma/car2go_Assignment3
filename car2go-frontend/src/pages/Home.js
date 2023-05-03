import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import ProductSlider from '../components/slider.js';

import './css/Carcard.css';

function CarCards() {


  return (
    <div>
    <Navbar />
    <Header />
    <ProductSlider />
    <Footer />
    </div>
  );
}

export default CarCards;
