import { createSelector } from 'reselect';

export const selectCartData = state => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  cartData => cartData.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (quantity, cartItem) =>
        quantity + cartItem.quantity
      , 0)
);
export const selectCartTax = createSelector(
  [selectCartItems],
  cartItem=>
    cartItem.reduce(
      (quantity,cartItem) =>
          cartItem.quantity*cartItem.productPrice * 0.18,0)

    // taxPrice = productPrice * 0.14; 
    // total = productPrice + taxPrice;
);
// const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.productPrice, 0);
// const taxPrice = productPrice * 0.14;
// const total = productPrice + taxPrice;
// taxPrice:selectCartTax,
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (quantity, cartItem) =>
        quantity + cartItem.quantity * cartItem.productPrice ,
    0)

);
