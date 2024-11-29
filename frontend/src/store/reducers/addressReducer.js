/*const initialState = {
    savedAddress: null,
  };
  
  const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_ADDRESS':
        return {
          ...state,
          savedAddress: action.payload,
        };
      case 'EDIT_ADDRESS':
        // Handle editing address if needed
        return {
          ...state,
          savedAddress: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addressReducer;*/



  // reducers/addressReducer.js

/*const initialState = {
  savedAddresses: [], // Renamed to an array to handle multiple addresses
  selectedAddressId: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_ADDRESS':
      return {
        ...state,
        savedAddresses: [action.payload, ...state.savedAddresses], // Add new address to the start
      };
    case 'EDIT_ADDRESS':
      // Handle editing address if needed
      return {
        ...state,
        savedAddresses: state.savedAddresses.map((address) =>
          address._id === action.payload._id ? action.payload : address
        ),
      };
    case 'DELETE_ADDRESS':
      return {
        ...state,
        savedAddresses: state.savedAddresses.filter(
          (address) => address._id !== action.payload
        ),
      };
    case 'SELECT_ADDRESS':
      return {
        ...state,
        selectedAddressId: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;*/

// addressReducer.js
const initialState = {
  savedAddresses: [],  // To keep all addresses
  selectedAddress: null,  // To keep the selected address
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_ADDRESS':
      return {
        ...state,
        savedAddresses: [...state.savedAddresses, action.payload],
      };
    case 'EDIT_ADDRESS':
      return {
        ...state,
        savedAddresses: state.savedAddresses.map(address =>
          address._id === action.payload._id ? action.payload : address
        ),
      };
    case 'SELECT_ADDRESS':
      return {
        ...state,
        selectedAddress: action.payload,
      };
    case 'DELETE_ADDRESS':
      return {
        ...state,
        savedAddresses: state.savedAddresses.filter(address => address._id !== action.payload._id),
        selectedAddress: state.selectedAddress && state.selectedAddress._id === action.payload._id ? null : state.selectedAddress,
      };
    default:
      return state;
  }
};

export default addressReducer;

