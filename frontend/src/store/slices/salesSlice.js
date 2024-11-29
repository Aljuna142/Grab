// src/store/slices/salesSlice.js

/*old without storename storing import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    salesData: [],
    filterOptions: {
        brand: '',
        category: '',
        dateFrom: '',
        dateTo: '',
        minPrice: '',
        maxPrice: '',
    },
};

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        setSalesData: (state, action) => {
            state.salesData = action.payload;
        },
        setFilterOptions: (state, action) => {
            state.filterOptions = { ...state.filterOptions, ...action.payload };
        },
        clearFilterOptions: (state) => {
            state.filterOptions = initialState.filterOptions;
        },
    },
});

export const { setSalesData, setFilterOptions, clearFilterOptions } = salesSlice.actions;
export default salesSlice.reducer;old without storename storing */

/*showing 9 like import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the sales slice
const initialState = {
    salesData: [], // Array to hold sales data
    filterOptions: { // Object to hold filter options
        salesperson: '', 
        customer: '',
        dateFrom: '',
        dateTo: '',
        minPrice: '',
        maxPrice: '',
    },
    storeName: '', // Add storeName to the initial state
};

// Create the sales slice using createSlice from Redux Toolkit
const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        // Action to set sales data
        setSalesData: (state, action) => {
            state.salesData = action.payload;
        },
        // Action to set or update filter options
        setFilterOptions: (state, action) => {
            state.filterOptions = { ...state.filterOptions, ...action.payload };
        },
        // Action to clear all filter options
        clearFilterOptions: (state) => {
            state.filterOptions = initialState.filterOptions;
        },
        // Action to set the selected store name
        setStoreName: (state, action) => {
            state.storeName = action.payload; // Set the store name in the state
        },
    },
});

// Export the actions for use in components
export const { setSalesData, setFilterOptions, clearFilterOptions, setStoreName } = salesSlice.actions;

// Export the reducer to be included in the store
export default salesSlice.reducer;showing 9 like */



import { createSlice } from '@reduxjs/toolkit';

const salesSlice = createSlice({
    name: 'sales',
    initialState: {
        salesData: [],
        storeName: '',
        filterOptions: {
            dateFrom: '',
            dateTo: '',
            salesperson: '',
            customer: '',
            minPrice: '',
            maxPrice: ''
        }
    },
    reducers: {
        setSalesData: (state, action) => {
            state.salesData = action.payload;
        },
        setStoreName: (state, action) => {
            state.storeName = action.payload;
        },
        setFilterOptions: (state, action) => {
            state.filterOptions = { ...state.filterOptions, ...action.payload };
        }
    }
});

export const { setSalesData, setStoreName, setFilterOptions } = salesSlice.actions;
export default salesSlice.reducer;
