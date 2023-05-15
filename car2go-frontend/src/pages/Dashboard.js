import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { encryptId } from './encryption';
import CryptoJS from 'crypto-js';
import './css/booked.css';
import AdminNavbar from '../components/admin/Admin-Navbar.js';
import CarDashboard from '../components/admin/list.js';
import Footer from '../components/footer.js';


function Dashboard() {


  

  return (
    <div>
    <div className='conatiner-dash'>
      <AdminNavbar />
      <CarDashboard />
      </div>
      <Footer />
    
  
    


    </div>
  );
}

export default Dashboard;

// ${car.image}