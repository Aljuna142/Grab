// src/store/actions/authActions.js
/*import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Login action
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data; // Returns the user and token
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

// Logout action
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/api/auth/logout');
      localStorage.removeItem('token');
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
  }
);*/


import axios from 'axios';

// Action to set the user in the Redux store
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

// Action to log out the user
export const logoutUser = () => {
    // Remove the token from localStorage
    localStorage.removeItem('authToken');
    return {
        type: 'LOGOUT_USER',
    };
};

// Action to log in the user
export const loginUser = (credentials) => async (dispatch) => {
    try {
        // Make a POST request to the login endpoint
        const { data } = await axios.post('/api/auth/login', credentials);
        
        // Dispatch the setUser action with the user data
        dispatch(setUser({
            username: data.username,
            email: data.email,
            token: data.token,
            // Add any additional user details you want to store
        }));
        
        // Save the token in localStorage
        localStorage.setItem('authToken', data.token);
        
    } catch (error) {
        console.error('Login failed:', error);
        // Dispatch an error action if needed
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
};
