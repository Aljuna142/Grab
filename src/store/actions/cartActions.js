// actions/cartActions.js
// actions/cartActions.js
/*export const addToCart = (product, quantity) => ({
    type: 'ADD_TO_CART',
    payload: { product, quantity }
});

export const updateCart = (productId, quantity) => ({
    type: 'UPDATE_CART',
    payload: { productId: String(productId), quantity }
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: { productId: String(productId) }
});*/
export const addToCart = (product, quantity) => ({
    type: 'ADD_TO_CART',
    payload: { product, quantity }
});

export const updateCart = (productId, quantity) => ({
    type: 'UPDATE_CART',
    payload: { productId: String(productId), quantity }
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: { productId: String(productId) }
});
