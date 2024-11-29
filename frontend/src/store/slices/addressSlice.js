/*import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerName: '',
  mobileNumber: '',
  email: '',
  street: '',
  city: '',
  country: '',
  postalCode: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setCustomerName: (state, action) => {
      state.customerName = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setPostalCode: (state, action) => {
      state.postalCode = action.payload;
    },
  },
});

export const {
  setCustomerName,
  setMobileNumber,
  setEmail,
  setStreet,
  setCity,
  setCountry,
  setPostalCode,
} = addressSlice.actions;

export default addressSlice.reducer;*/


/*good working storing address import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerName: '',
  mobileNumber: '',
  email: '',
  street: '',
  city: '',
  country: '',
  postalCode: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setCustomerName: (state, action) => {
      state.customerName = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setPostalCode: (state, action) => {
      state.postalCode = action.payload;
    },
    // New reducer for setting the entire shipping address
    setShippingAddress: (state, action) => {
      const { street, city, country, postalCode } = action.payload;
      state.street = street;
      state.city = city;
      state.country = country;
      state.postalCode = postalCode;
    },
  },
});

export const {
  setCustomerName,
  setMobileNumber,
  setEmail,
  setStreet,
  setCity,
  setCountry,
  setPostalCode,
  setShippingAddress,
} = addressSlice.actions;

export default addressSlice.reducer;*/


/*addreess id no import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerName: '',
  mobileNumber: '',
  email: '',
  street: '',
  city: '',
  country: '',
  postalCode: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setCustomerName(state, action) {
      state.customerName = action.payload;
    },
    setMobileNumber(state, action) {
      state.mobileNumber = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setAddress(state, action) {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setCustomerName, setMobileNumber, setEmail, setAddress } = addressSlice.actions;
export default addressSlice.reducer; without address id otherwise okay*/

import { createSlice } from '@reduxjs/toolkit';

// Initial state of the address slice
const initialState = {
  customerName: '',
  mobileNumber: '',
  email: '',
  street: '',
  city: '',
  country: '',
  postalCode: '',
  addressId: '', // Store the unique address ID
};

// Create the address slice
const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setCustomerName(state, action) {
      state.customerName = action.payload;
    },
    setMobileNumber(state, action) {
      state.mobileNumber = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setAddressId(state, action) {
      state.addressId = action.payload; // Set the address ID
    },
    setAddress(state, action) {
      // Merge the state with the payload
      return { ...state, ...action.payload };
    },
  },
});

// Export actions for use in components
export const { setCustomerName, setMobileNumber, setEmail, setAddress, setAddressId } = addressSlice.actions;

// Export the reducer to be included in the store
export default addressSlice.reducer;
