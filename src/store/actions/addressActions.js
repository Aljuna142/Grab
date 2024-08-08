/*export const saveAddress = (formData) => {
    // Simulate async API call to save address
    return async (dispatch) => {
      try {
        // Replace with actual API call to save address
        const savedAddress = await saveAddressToAPI(formData);
        dispatch({
          type: 'SAVE_ADDRESS',
          payload: savedAddress,
        });
        return savedAddress;
      } catch (error) {
        console.error('Error saving address:', error);
        // Handle error if needed
      }
    };
  };
  
  // Example async function to save address to API
  const saveAddressToAPI = async (formData) => {
    // Replace with actual API endpoint and logic to save address
    // For now, return the form data as savedAddress
    return formData;
  };
  */


  // actions/addressActions.js

/*export const saveAddress = (formData) => {
  return async (dispatch) => {
    try {
      const savedAddress = await saveAddressToAPI(formData);
      dispatch({
        type: 'SAVE_ADDRESS',
        payload: savedAddress,
      });
      return savedAddress;
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };
};

export const selectAddress = (addressId) => {
  return {
    type: 'SELECT_ADDRESS',
    payload: addressId,
  };
};

export const deleteAddress = (addressId) => {
  return async (dispatch) => {
    try {
      await deleteAddressFromAPI(addressId);
      dispatch({
        type: 'DELETE_ADDRESS',
        payload: addressId,
      });
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };
};

// Example async function to save address to API
const saveAddressToAPI = async (formData) => {
  return formData; // Replace with actual API call
};

// Example async function to delete address from API
const deleteAddressFromAPI = async (addressId) => {
  // Replace with actual API call
};
*/


// actions/addressActions.js
export const selectAddress = (address) => ({
  type: 'SELECT_ADDRESS',
  payload: address,
});

export const deleteAddress = (address) => ({
  type: 'DELETE_ADDRESS',
  payload: address,
});

