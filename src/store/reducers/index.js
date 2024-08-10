/*src/store/reducers/index.js*/


/*import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice'; // Import the wishlist slice

const rootReducer = combineReducers({
  wishlist: wishlistReducer, // Add the wishlist reducer
});

export default rootReducer;*/



// src/store/reducers/index.js
/*import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice';




const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    
    
});

export default rootReducer;
*/

// src/store/reducers/index.js
// src/store/reducers/index.js

// src/store/reducers/index.js
/*import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice';
import { cartReducer } from './cartReducer'; // Import cartReducer correctly
import {checkoutReducer} from './checkoutReducer';

const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    cart: cartReducer, // Add cart reducer here
    checkout: checkoutReducer,
    
});

export default rootReducer;*/




/*import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice';
import { cartReducer } from './cartReducer';
import {checkoutReducer} from './checkoutReducer'; // Ensure correct import
import addressReducer from './addressReducer'; // Correct import without .js extension
import bankDetailsReducer from './slices/bankDetailsSlice';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  address: addressReducer, // Add addressReducer here
  bankDetails: bankDetailsReducer,
});

export default rootReducer;hey*/

/*import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';
import addressReducer from './addressReducer';
import bankDetailsReducer from '../slices/bankDetailsSlice'; // Correct path

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  address: addressReducer,
  bankDetails: bankDetailsReducer,
});

export default rootReducer;*/


/*import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice';
import  {cartReducer}  from './cartReducer.js';
import { checkoutReducer } from './checkoutReducer';
import addressReducer from './addressReducer';
import bankDetailsReducer from '../slices/bankDetailsSlice'; // Correct path
import searchReducer from './searchReducer.js'; // Correct path

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  address: addressReducer,
  bankDetails: bankDetailsReducer,
  search: searchReducer, // Add the searchReducer here
});

export default rootReducer;good*/


import { combineReducers } from 'redux';
import wishlistReducer from '../slices/wishlistSlice.js';
import { checkoutReducer } from './checkoutReducer';
import addressReducer from './addressReducer';
import bankDetailsReducer from '../slices/bankDetailsSlice'; // Correct path
import searchReducer from './searchReducer.js'; // Correct path
import cartReducer from '../slices/cartSlice'; // Import the cartReducer from the cartSlice

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,           // Use the cartReducer from the cartSlice
  checkout: checkoutReducer,
  address: addressReducer,
  bankDetails: bankDetailsReducer,
  search: searchReducer,       // Add the searchReducer here
});

export default rootReducer;
