import { Link } from "react-router-dom";
import { API_URL } from '../../src/utils/value.js';
import "./Css/navbar.css";
import React from "react";
import axios from 'axios';

const Navbar = () => {

  const handleLogout = () => {
    axios.post(`${API_URL}/logout`).then(() => {
      // Remove any items from local storage
      localStorage.clear();
      sessionStorage.clear();
      // Redirect the user to the login page
      window.location.href = '/login';
    }).catch((error) => {
      console.error(error);
    });
  };
  


  return (
    <>
      <nav>
        <div className="logo-container">
          <Link to="/home">
            <div className="logo">
              <a href="#">Car2Go</a>
            </div>
          </Link>
        </div>
        <ul className="list-nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/booked">Booked Cars</Link>
          </li>

          <li>
            <a href="#" onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
