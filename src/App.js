
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
//import Farmers from './components/farmers/Farmers';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Admin from './pages/admin/Admin';
import OrdersList from './components/OrdersList';
import Register from "./pages/Register/Register"
import Login from './pages/Login/Login';
import Farmers from './components/farmers/Farmers';
import Supplier from './components/supplier/Supplier';
import AdminDashboard from './components/AdminDashboard';
import NewCustomer from "./components/newCustomer/NewCustomer"



function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/farmers" element={<Farmers/>}/>
        <Route path="/supplier" element={<Supplier/>}/>
        <Route path="/customer" element={<NewCustomer/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/ordersList" element={<OrdersList/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
