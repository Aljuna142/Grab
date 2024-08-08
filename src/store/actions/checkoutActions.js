// src/store/actions/checkoutActions.js
// src/store/actions/checkoutActions.js

export const SET_SHIPPING_ADDRESS = 'SET_SHIPPING_ADDRESS';
export const SET_ORDER_SUMMARY = 'SET_ORDER_SUMMARY';

export const setShippingAddress = (address) => ({
  type: SET_SHIPPING_ADDRESS,
  payload: address
});

export const setOrderSummary = (summary) => ({
  type: SET_ORDER_SUMMARY,
  payload: summary
});
