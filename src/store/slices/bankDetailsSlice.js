
// src/store/slices/bankDetailsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bankDetailsSlice = createSlice({
  name: 'bankDetails',
  initialState,
  reducers: {
    addBankDetail: (state, action) => {
      state.push(action.payload);
    },
    editBankDetail: (state, action) => {
      const { id, updatedDetails } = action.payload;
      const index = state.findIndex(detail => detail.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedDetails };
      }
    },
    deleteBankDetail: (state, action) => {
      const id = action.payload;
      return state.filter(detail => detail.id !== id);
    }
  },
});

export const { addBankDetail, editBankDetail, deleteBankDetail } = bankDetailsSlice.actions;
export default bankDetailsSlice.reducer;
