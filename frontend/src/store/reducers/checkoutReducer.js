// src/store/reducers/checkoutReducer.js

// src/store/reducers/checkoutReducer.js

import { SET_SHIPPING_ADDRESS, SET_ORDER_SUMMARY } from '../actions/checkoutActions';

const initialState = {
  shippingAddress: {},
  orderSummary: {}
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload
      };
    case SET_ORDER_SUMMARY:
      return {
        ...state,
        orderSummary: action.payload
      };
    default:
      return state;
  }
};
