// src/store/reducers/authReducers.js
/*import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from '../actions/authActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;*/

/*const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_USER':
          return {
              ...state,
              user: action.payload,
              isAuthenticated: true,
          };
      case 'LOGOUT_USER':
          return {
              ...state,
              user: null,
              isAuthenticated: false,
          };
      default:
          return state;
  }
};

export default authReducer;*/


/*1// src/store/reducers/authReducers.js
import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from '../actions/authActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login handling
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed for unknown reasons';
        console.error('Login rejected:', action.payload); // Log the error reason for login
      })
      
      // Logout handling
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Logout failed for unknown reasons';
        console.error('Logout rejected:', action.payload); // Log the error reason for logout
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;1*/

// src/store/reducers/authReducers.js
import { createSlice } from '@reduxjs/toolkit';

// Create Redux slice for auth
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null, // Check localStorage for existing user
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload; // Set the user in Redux state
    },
    clearUser(state) {
      state.user = null; // Clear the user in Redux state
    },
  },
  extraReducers: (builder) => {
    builder
      // Login handling
      .addCase('SET_USER', (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Set the user from action payload
        console.log('Login successful:', action.payload); // Log user data after login
      })
      .addCase('LOGIN_FAIL', (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed for unknown reasons';
        console.error('Login failed:', action.payload); // Log the error reason for login failure
      })

      // Logout handling
      .addCase('LOGOUT_USER', (state) => {
        state.status = 'idle';
        state.user = null; // Clear the user from Redux state
        console.log('User logged out'); // Log the successful logout in Redux
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
