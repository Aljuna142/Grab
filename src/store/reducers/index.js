/*src/store/reducers/index.js*/


import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice'; // Import the wishlist slice

const rootReducer = combineReducers({
  wishlist: wishlistReducer, // Add the wishlist reducer
});

export default rootReducer;
