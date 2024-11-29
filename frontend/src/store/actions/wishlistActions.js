// src/store/actions/wishlistActions.js
import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('wishlist/addItem');
export const removeItem = createAction('wishlist/removeItem');
