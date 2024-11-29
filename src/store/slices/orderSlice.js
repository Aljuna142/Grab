/*import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    currentOrder: null, // To hold the details of the current order
    orderStatus: 'idle', // Could be 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    placeOrderStart(state) {
      state.orderStatus = 'loading';
      state.error = null;
    },
    placeOrderSuccess(state, action) {
      state.orderStatus = 'succeeded';
      state.currentOrder = action.payload;
    },
    placeOrderFailure(state, action) {
      state.orderStatus = 'failed';
      state.error = action.payload;
    },
    clearOrder(state) {
      state.currentOrder = null;
    },
  },
});

export const {
  placeOrderStart,
  placeOrderSuccess,
  placeOrderFailure,
  clearOrder,
} = orderSlice.actions;

export default orderSlice.reducer;*/


/*import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    currentOrder: null,
    orderStatus: 'idle',
    error: null,
  },
  reducers: {
    placeOrderStart(state) {
      state.orderStatus = 'loading';
      state.error = null;
    },
    placeOrderSuccess(state, action) {
      state.orderStatus = 'succeeded';
      state.currentOrder = action.payload;
    },
    placeOrderFailure(state, action) {
      state.orderStatus = 'failed';
      state.error = action.payload;
    },
    clearOrder(state) {
      state.currentOrder = null;
    },
  },
});

export const {
  placeOrderStart,
  placeOrderSuccess,
  placeOrderFailure,
  clearOrder,
} = orderSlice.actions;

export default orderSlice.reducer;*/
/*no user import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch order by ID
export const getOrderById = createAsyncThunk(
  'order/getOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/v1/orders/${orderId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    currentOrder: null,
    orderStatus: 'idle',
    error: null,
  },
  reducers: {
    clearOrder(state) {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderById.pending, (state) => {
        state.orderStatus = 'loading';
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.orderStatus = 'succeeded';
        state.currentOrder = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.orderStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearOrder } = orderSlice.actions;

export default orderSlice.reducer;no user*/



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch order by ID
export const getOrderById = createAsyncThunk(
  'order/getOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/v1/orders/${orderId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Thunk to create an order
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/v1/orders', orderData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Thunk to update order status
export const updateOrderStatus = createAsyncThunk(
  'order/updateOrderStatus',
  async ({ orderId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/v1/orders/${orderId}/${status}`, {}, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    currentOrder: null,
    orderStatus: 'idle',
    error: null,
  },
  reducers: {
    clearOrder(state) {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderById.pending, (state) => {
        state.orderStatus = 'loading';
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.orderStatus = 'succeeded';
        state.currentOrder = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.orderStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(createOrder.pending, (state) => {
        state.orderStatus = 'loading';
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderStatus = 'succeeded';
        // Optionally, handle the created order
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.orderStatus = 'loading';
        state.error = null;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.orderStatus = 'succeeded';
        // Optionally, handle the updated order status
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.orderStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
