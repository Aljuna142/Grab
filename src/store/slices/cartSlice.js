// src/slices/cartSlice.js
/*import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
            const itemExists = state.cartItems.find(item => item.product._id === product._id);
            if (itemExists) {
                state.cartItems = state.cartItems.map(item =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                state.cartItems.push({ product, quantity });
            }
        },
        updateCart: (state, action) => {
            const { productId, quantity } = action.payload;
            state.cartItems = state.cartItems.map(item =>
                item.product._id === productId
                    ? { ...item, quantity }
                    : item
            );
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.product._id !== action.payload);
        },
    },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;*/


// cartSlice.js

// src/store/slices/cartSlice.js

// src/store/slices/cartSlice.js
/*import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id,image, name, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id,image, name, price, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;*/



// src/store/slices/cartSlice.js
const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_TO_CART':
          const itemExists = state.cartItems.find(
              item => item.product._id === action.payload.product._id
          );
          if (itemExists) {
              return {
                  ...state,
                  cartItems: state.cartItems.map(item =>
                      item.product._id === action.payload.product._id
                          ? { ...item, quantity: item.quantity + action.payload.quantity }
                          : item
                  ),
              };
          }
          return {
              ...state,
              cartItems: [...state.cartItems, action.payload],
          };

      case 'UPDATE_CART':
          return {
              ...state,
              cartItems: state.cartItems.map(item =>
                  item.product._id === action.payload.productId
                      ? { ...item, quantity: action.payload.quantity }
                      : item
              ),
          };

      case 'REMOVE_FROM_CART':
          return {
              ...state,
              cartItems: state.cartItems.filter(
                  item => item.product._id !== action.payload.productId
              ),
          };

      default:
          return state;
  }
};
