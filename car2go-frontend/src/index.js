import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CarCard from "./pages/Home";
import RentList from "./pages/cars";
import Booked from "./pages/BookedCar";
import RentForm from "./components/form";

import AddCar from "./pages/AddCar";

import NoPage from "./pages/NoPage";


import React from "react";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Register />} />
                <Route path="/add" element={<AddCar/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/admin" element={<Dashboard/>} />
                <Route path="/add/:id" element={<AddCar isEdit={true} />} />
                <Route path="/home" element={<CarCard />} />
                <Route path="/cars" element={<RentList />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/form/:id" element={<RentForm />} />
                <Route path="/booked" element={<Booked />} />
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);