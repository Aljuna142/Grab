/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
//import OrdersSummary from '../components/dashboard/OrdersSummary';
//import CustomerStats from '../components/dashboard/CustomerStats';
//import TopCustomers from '../components/dashboard/TopCustomers';
// Import other components as needed
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 

import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 

const DashboardRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} /> {/* Add the Damages route }
            <Route path="stock" element={<Stock />} /> 
            <Route path="pos/multistore/*" element={<MultiStore />} />
            {/*<Route path="sales-management" element={<SalesEntry />} />}
            <Route path="sales-management" element={<SalesDashboard />} /> {/* Pointing to Sales Dashboard }
            <Route path="sales-entry" element={<SalesEntry />} /> {/* Pointing to Sales Entry Form }

            {/* Add other routes here}
        </Routes>
    );
};

export default DashboardRoutes;*/

/*000000000import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 
import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 
import CrownExcel from '../dashboard/CrownExcel'; 
import Aljasara from '../dashboard/pos/Aljasara'; 

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging
    return ( 
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} /> 
            <Route path="pos/multistore/*" element={<MultiStore />} />
            <Route path="pos/crown-excel" element={<CrownExcel />} /> {/* Pointing to Crown Excel }
            <Route path="pos/al-jasara" element={<Aljasara />} />
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />
            <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Add this line }
        </Routes>
    );
};

export default DashboardRoutes;*/

/*good with storeimport React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 
import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 
import StoreDetail from '../dashboard/pos/StoreDetails'; // Assuming StoreDetail is the dynamic component

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging
    return ( 
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} /> 
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />

            {/* MultiStore Entry and Dynamic Store Details }
            <Route path="pos/multistore" element={<MultiStore />} /> 
            <Route path="pos/:storeName" element={<StoreDetail />} /> {/* Dynamic store details }

            {/* Fallback for non-existing routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;*/

/*perfect import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 
import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 
import StoreDetail from '../dashboard/pos/StoreDetails'; // Assuming StoreDetail is the dynamic component
import StockDetail from '../dashboard/pos/StockDetail'; // Import StockDetail
import SalesDetail from '../dashboard/pos/SalesDetail'; // Import SalesDetail
import OrdersDetail from '../dashboard/pos/OrdersDetail'; // Import OrdersDetail
import ProductDetail from '../dashboard/pos/ProductDetail'; // Import ProductDetail

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging
    return ( 
        <Routes>
            {/* Main Dashboard Route *}
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} /> 
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />

            {/* MultiStore Entry and Dynamic Store Details }
            <Route path="pos/multistore" element={<MultiStore />} /> 
            <Route path="pos/:storeName" element={<StoreDetail />} /> {/* Dynamic store details }

            {/* Additional detail routes for each store }
            <Route path="pos/:storeName/stock" element={<StockDetail />} />
            <Route path="pos/:storeName/sales" element={<SalesDetail />} />
            <Route path="pos/:storeName/orders" element={<OrdersDetail />} />
            <Route path="pos/:storeName/products" element={<ProductDetail />} />

            {/* Fallback for non-existing routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;*/

/*good pakka import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 
import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 
import StoreDetail from '../dashboard/pos/StoreDetails'; // Assuming StoreDetail is the dynamic component
import StockDetail from '../dashboard/pos/StockDetail'; // Import StockDetail
import SalesDetail from '../dashboard/pos/SalesDetail'; // Import SalesDetail
import OrdersDetail from '../dashboard/pos/OrdersDetail'; // Import OrdersDetail
import ProductDetail from '../dashboard/pos/ProductDetail'; // Import ProductDetail

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging
    return ( 
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} /> 
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />

            {/* MultiStore Entry and Dynamic Store Details }
            <Route path="pos/multistore" element={<MultiStore />} /> 
            
            {/* Dynamic store details with nested routes }
            <Route path="pos/:storeName" element={<StoreDetail />}>
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
            </Route>

            {/* Fallback for non-existing routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;good pakka */

/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 
import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 
import StoreDetail from '../dashboard/pos/StoreDetails'; // Assuming StoreDetail is the dynamic component
import StockDetail from '../dashboard/pos/StockDetail'; // Import StockDetail
import SalesDetail from '../dashboard/pos/SalesDetail'; // Import SalesDetail
import OrdersDetail from '../dashboard/pos/OrdersDetail'; // Import OrdersDetail
import ProductDetail from '../dashboard/pos/ProductDetail'; // Import ProductDetail
import ReturnRefund from '../dashboard/ReturnRefund'; // Import ReturnRefund component

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging
    return ( 
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} /> 
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />
            
            {/* Route for Return and Refund }
            <Route path="return-refunds" element={<ReturnRefund />} />

            {/* MultiStore Entry and Dynamic Store Details }
            <Route path="pos/multistore" element={<MultiStore />} /> 
            
            {/* Dynamic store details with nested routes }
            <Route path="pos/:storeName" element={<StoreDetail />}>
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
            </Route>

            {/* Fallback for non-existing routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;*/

// DashboardRoutes.js
/*good import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 
import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 
import StoreDetail from '../dashboard/pos/StoreDetails';
import StockDetail from '../dashboard/pos/StockDetail';
import SalesDetail from '../dashboard/pos/SalesDetail';
import OrdersDetail from '../dashboard/pos/OrdersDetail';
import ProductDetail from '../dashboard/pos/ProductDetail';
import ReturnRefund from '../dashboard/ReturnRefund';
import OnlineOrders from '../dashboard/OnlineOrders'; // Import OnlineOrders component

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging
    return ( 
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} /> 
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />
            
            {/* Route for Return and Refund }
            <Route path="return-refunds" element={<ReturnRefund />} />

            {/* Route for Online Orders }
            <Route path="online-orders" element={<OnlineOrders />} /> {/* Add this line }

            {/* MultiStore Entry and Dynamic Store Details }
            <Route path="pos/multistore" element={<MultiStore />} /> 
            
            {/* Dynamic store details with nested routes }
            <Route path="pos/:storeName" element={<StoreDetail />} >
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
            </Route>

            {/* Fallback for non-existing routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;good*/

// DashboardRoutes.js
/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases'; 
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore'; 
import SalesEntry from '../dashboard/SalesEntry'; 
import Damages from '../dashboard/Damages'; 
import SalesDashboard from '../dashboard/SalesDashboard'; 
import StoreDetail from '../dashboard/pos/StoreDetails';
import StockDetail from '../dashboard/pos/StockDetail';
import SalesDetail from '../dashboard/pos/SalesDetail';
import OrdersDetail from '../dashboard/pos/OrdersDetail';
import ProductDetail from '../dashboard/pos/ProductDetail';
import ReturnRefund from '../dashboard/ReturnRefund';
import OnlineOrders from '../dashboard/OnlineOrders'; // Import OnlineOrders component

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging
    return ( 
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} /> 
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />
            
            {/* Route for Return and Refund }
            <Route path="return-refunds" element={<ReturnRefund />} />

            {/* Route for Online Orders }
            <Route path="online-orders" element={<OnlineOrders />} /> {/* Add this line }

            {/* MultiStore Entry and Dynamic Store Details }
            <Route path="pos/multistore" element={<MultiStore />} /> 
            
            {/* Dynamic store details with nested routes }
            <Route path="pos/:storeName" element={<StoreDetail />} >
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
                
                {/* Add the damages and purchases routes here /}
                <Route path="damages" element={<Damages />} />  {/* Damages by store }
                <Route path="purchases" element={<Purchases />} /> {/* Purchases by store }
            </Route>

            {/* Fallback for non-existing routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;perfect working with store sidebar */

// DashboardRoutes.js
/*perfect sales working import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases';
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore';
import SalesEntry from '../dashboard/SalesEntry';
import Damages from '../dashboard/Damages';
import SalesDashboard from '../dashboard/SalesDashboard';
import StoreDetail from '../dashboard/pos/StoreDetails';
import StockDetail from '../dashboard/pos/StockDetail';
import SalesDetail from '../dashboard/pos/SalesDetail';
import OrdersDetail from '../dashboard/pos/OrdersDetail';
import ProductDetail from '../dashboard/pos/ProductDetail';
import ReturnRefund from '../dashboard/ReturnRefund';
import OnlineOrders from '../dashboard/OnlineOrders';

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging

    return (
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} />
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />

            {/* Route for Return and Refund }
            <Route path="return-refunds" element={<ReturnRefund />} />

            {/* Route for Online Orders }
            <Route path="online-orders" element={<OnlineOrders />} />

            {/* MultiStore Entry }
            <Route path="pos/multistore" element={<MultiStore />} />

            {/* Dynamic Store Details with Nested Routes }
            <Route path="pos/:storeName" element={<StoreDetail />}>
                {/* Default route - Redirect to stock }
                <Route index element={<Navigate to="stock" replace />} />

                {/* Nested Routes for Store Sections }
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
                <Route path="damages" element={<Damages />} />
                <Route path="purchases" element={<Purchases />} />
            </Route>

            {/* Fallback for Non-Existing Routes}
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;perfect*/

/*import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases';
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore';
import SalesEntry from '../dashboard/SalesEntry';
import Damages from '../dashboard/Damages';
import SalesDashboard from '../dashboard/SalesDashboard';
import StoreDetail from '../dashboard/pos/StoreDetails';
import StockDetail from '../dashboard/pos/StockDetail';
import SalesDetail from '../dashboard/pos/SalesDetail';
import OrdersDetail from '../dashboard/pos/OrdersDetail';
import ProductDetail from '../dashboard/pos/ProductDetail';
import ReturnRefund from '../dashboard/ReturnRefund';
import OnlineOrders from '../dashboard/OnlineOrders';

const DashboardRoutes = () => {
    return (
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} />
            <Route path="sales-management" element={<SalesDashboard />} />

            {/* Active Sales Entry Route }
            <Route path="sales-entry" element={<SalesEntry />} />

            {/* Commented Routes for Later Use }
            {/* <Route path="sales-report" element={<SalesReport />} /> }
            {/* <Route path="return-orders" element={<ReturnOrders />} /> }
            {/* <Route path="online-orders" element={<OnlineOrders />} /> }

            {/* MultiStore Entry }
            <Route path="pos/multistore" element={<MultiStore />} />

            {/* Dynamic Store Details with Nested Routes }
            <Route path="pos/:storeName" element={<StoreDetail />}>
                <Route index element={<Navigate to="stock" replace />} />
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
                <Route path="damages" element={<Damages />} />
                <Route path="purchases" element={<Purchases />} />
            </Route>

            {/* Fallback for Non-Existing Routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;*/

// DashboardRoutes.js
/*with accounts sales working import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases';
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore';
import SalesEntry from '../dashboard/SalesEntry';
import Damages from '../dashboard/Damages';
import SalesDashboard from '../dashboard/SalesDashboard';
import StoreDetail from '../dashboard/pos/StoreDetails';
import StockDetail from '../dashboard/pos/StockDetail';
import SalesDetail from '../dashboard/pos/SalesDetail';
import OrdersDetail from '../dashboard/pos/OrdersDetail';
import ProductDetail from '../dashboard/pos/ProductDetail';
import ReturnRefund from '../dashboard/ReturnRefund';
import OnlineOrders from '../dashboard/OnlineOrders';
import Accounts from '../dashboard/Accounts'; // Import Accounts component

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging

    return (
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} />
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />

            {/* Route for Accounts }
            <Route path="accounts" element={<Accounts />} />  {/* Added Accounts route }

            {/* Route for Return and Refund }
            <Route path="return-refunds" element={<ReturnRefund />} />

            {/* Route for Online Orders }
            <Route path="online-orders" element={<OnlineOrders />} />

            {/* MultiStore Entry }
            <Route path="pos/multistore" element={<MultiStore />} />

            {/* Dynamic Store Details with Nested Routes }
            <Route path="pos/:storeName" element={<StoreDetail />}>
                <Route index element={<Navigate to="stock" replace />} />
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
                <Route path="damages" element={<Damages />} />
                <Route path="purchases" element={<Purchases />} />
            </Route>

            {/* Fallback for Non-Existing Routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;*/

/*perfect working sales data sales entry import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Products from '../dashboard/Products';
import Purchases from '../dashboard/Purchases';
import Stock from '../dashboard/Stock';
import MultiStore from '../dashboard/pos/MultiStore';
import SalesEntry from '../dashboard/SalesEntry';
import Damages from '../dashboard/Damages';
import SalesDashboard from '../dashboard/SalesDashboard';
import StoreDetail from '../dashboard/pos/StoreDetails';
import StockDetail from '../dashboard/pos/StockDetail';
import SalesDetail from '../dashboard/pos/SalesDetail';
import OrdersDetail from '../dashboard/pos/OrdersDetail';
import ProductDetail from '../dashboard/pos/ProductDetail';
import ReturnRefund from '../dashboard/ReturnRefund';
import OnlineOrders from '../dashboard/OnlineOrders';
import Accounts from '../dashboard/Accounts'; // Import Accounts component
import Transactions from '../dashboard/Transactions'; // Import Transactions component

const DashboardRoutes = () => {
    console.log('DashboardRoutes component rendered'); // For debugging

    return (
        <Routes>
            {/* Main Dashboard Route }
            <Route path="/" element={<Dashboard />} />

            {/* Other Dashboard Sections }
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="damages" element={<Damages />} />
            <Route path="stock" element={<Stock />} />
            <Route path="sales-management" element={<SalesDashboard />} />
            <Route path="sales-entry" element={<SalesEntry />} />

            {/* Route for Accounts }
            <Route path="accounts" element={<Accounts />} />  {/* Added Accounts route }

            {/* Route for Transactions }
            <Route path="transactions" element={<Transactions />} /> {/* Added Transactions route }

            {/* Route for Return and Refund }
            <Route path="return-refunds" element={<ReturnRefund />} />

            {/* Route for Online Orders }
            <Route path="online-orders" element={<OnlineOrders />} />

            {/* MultiStore Entry }
            <Route path="pos/multistore" element={<MultiStore />} />

            {/* Dynamic Store Details with Nested Routes }
            <Route path="pos/:storeName" element={<StoreDetail />}>
                <Route index element={<Navigate to="stock" replace />} />
                <Route path="stock" element={<StockDetail />} />
                <Route path="sales" element={<SalesDetail />} />
                <Route path="orders" element={<OrdersDetail />} />
                <Route path="products" element={<ProductDetail />} />
                <Route path="damages" element={<Damages />} />
                <Route path="purchases" element={<Purchases />} />
            </Route>

            {/* Fallback for Non-Existing Routes }
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default DashboardRoutes;*/

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Products from "../dashboard/Products";
import Purchases from "../dashboard/Purchases";
import Stock from "../dashboard/Stock";
import MultiStore from "../dashboard/pos/MultiStore";
import SalesEntry from "../dashboard/SalesEntry";
import Damages from "../dashboard/Damages";
import SalesDashboard from "../dashboard/SalesDashboard";
import StoreDetail from "../dashboard/pos/StoreDetails";
import StockDetail from "../dashboard/pos/StockDetail";
import SalesDetail from "../dashboard/pos/SalesDetail";
import OrdersDetail from "../dashboard/pos/OrdersDetail";
import ProductDetail from "../dashboard/pos/ProductDetail";
import ReturnRefund from "../dashboard/ReturnRefund";
import OnlineOrders from "../dashboard/OnlineOrders";
import Accounts from "../dashboard/Accounts";
import Transactions from "../dashboard/Transactions";

// Import the components for Administrator, Employees, and Users (Customers)
import AdministratorList from "../dashboard/AdministratorList";
import AdministratorForm from "../dashboard/forms/AdministratorForm";
import AdministratorDetail from "../dashboard/AdministratorDetail";
import EmployeeList from "../dashboard/EmployeeList"; // Placeholder for Employee List component
import UserList from "../dashboard/UserList"; // Placeholder for User List component

const DashboardRoutes = () => {
  console.log("DashboardRoutes component rendered"); // For debugging

  return (
    <Routes>
      {/* Main Dashboard Route */}
      <Route path="/" element={<Dashboard />} />

      {/* Other Dashboard Sections */}
      <Route path="products" element={<Products />} />
      <Route path="purchases" element={<Purchases />} />
      <Route path="damages" element={<Damages />} />
      <Route path="stock" element={<Stock />} />
      <Route path="sales-management" element={<SalesDashboard />} />
      <Route path="sales-entry" element={<SalesEntry />} />

      {/* Route for Accounts */}
      <Route path="accounts" element={<Accounts />} />

      {/* Route for Transactions */}
      <Route path="transactions" element={<Transactions />} />

      {/* Route for Return and Refund */}
      <Route path="return-refunds" element={<ReturnRefund />} />

      {/* Route for Online Orders */}
      <Route path="online-orders" element={<OnlineOrders />} />

      {/* MultiStore Entry */}
      <Route path="pos/multistore" element={<MultiStore />} />

      {/* Dynamic Store Details with Nested Routes */}
      <Route path="pos/:storeName" element={<StoreDetail />}>
        <Route index element={<Navigate to="stock" replace />} />
        <Route path="stock" element={<StockDetail />} />
        <Route path="sales" element={<SalesDetail />} />
        <Route path="orders" element={<OrdersDetail />} />
        <Route path="products" element={<ProductDetail />} />
        <Route path="damages" element={<Damages />} />
        <Route path="purchases" element={<Purchases />} />
      </Route>

      {/* Routes for Administrators */}
      <Route path="administrators" element={<AdministratorList />} />
      <Route path="administrators/new" element={<AdministratorForm />} />
      <Route path="administrators/:id" element={<AdministratorDetail />} />
      {/* Routes for Employees */}
      <Route path="employees" element={<EmployeeList />} />

      {/* Routes for Users (Customers) */}
      <Route path="users" element={<UserList />} />

      {/* Fallback for Non-Existing Routes */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default DashboardRoutes;
