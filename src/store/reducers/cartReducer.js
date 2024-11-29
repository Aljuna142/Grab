// reducers/cartReducer.js

// reducers/cartReducer.js
/*const initialState = {
    cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the item is already in the cart
            const itemExists = state.cartItems.find(
                item => item.product._id === action.payload.product._id
            );
            if (itemExists) {
                // Update the quantity if item exists
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.product._id === action.payload.product._id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            }
            // Add new item to cart
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
*/
// reducers/cartReducer.js
/*const initialState = {
    cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the item is already in the cart
            const itemExists = state.cartItems.find(
                item => item.product._id === action.payload.product._id
            );
            if (itemExists) {
                // Update the quantity if item exists
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.product._id === action.payload.product._id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            }
            // Add new item to cart
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
};*/

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








/*const initialState = {
    cartItems: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const { product, quantity } = action.payload;
        const itemExists = state.cartItems.find(
          item => item.product._id === product._id
        );
        if (itemExists) {
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.product._id === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        }
        return {
          ...state,
          cartItems: [...state.cartItems, { product, quantity }],
        };
  
      case 'UPDATE_CART':
        const { productId, quantity: newQuantity } = action.payload;
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.product._id === productId
              ? { ...item, quantity: newQuantity }
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
  */