export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_FROM_CART = 'CLEAR_FROM_CART';

export const addToCart = (product, sizeName) => ({
  type: ADD_TO_CART,
  payload: { product, sizeName },
});

export const clearFromCart = (product, sizeName) => ({
  type: CLEAR_FROM_CART,
  payload: { product, sizeName },
});
