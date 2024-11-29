/*import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;*/
// src/store/slices/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { addItem, removeItem } from '../actions/wishlistActions';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItem, (state, action) => {
        const itemExists = state.items.find(item => item.id === action.payload.id);
        if (!itemExists) {
          state.items.push(action.payload);
        }
      })
      .addCase(removeItem, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      });
  },
});

export default wishlistSlice.reducer;
