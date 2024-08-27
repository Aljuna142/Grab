import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
//import OrdersSummary from '../components/dashboard/OrdersSummary';
//import CustomerStats from '../components/dashboard/CustomerStats';
//import TopCustomers from '../components/dashboard/TopCustomers';
// Import other components as needed
import Purchases from '../dashboard/Purchases'; 

import Damages from '../dashboard/Damages'; 

const DashboardRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} /> {/* Add the Damages route */}
            {/* Add other routes here */}
        </Routes>
    );
};

export default DashboardRoutes;
