import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const index = state.cartItems.findIndex(element => {
        return element.item.id == newItem.id;
      });

      if (index != -1) {
        const cartItem = state.cartItems[index];

        cartItem.quantity += 1;
        cartItem.total = cartItem.item.basePrice * cartItem.quantity;

        state.totalItems += 1;
        state.totalPrice += cartItem.item.basePrice;
      } else {
        const cartItem = {item: newItem, quantity: 1};

        state.cartItems.push(cartItem);
        cartItem.total = cartItem.item.basePrice * cartItem.quantity;

        state.totalItems += 1;
        state.totalPrice += cartItem.item.basePrice;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;

      const index = state.cartItems.findIndex(element => {
        return element.item.id == itemId;
      });

      if (index != -1) {
        const cartItem = state.cartItems[index];

        cartItem.quantity -= 1;
        cartItem.total = cartItem.item.basePrice * cartItem.quantity;

        state.totalItems -= 1;
        state.totalPrice -= cartItem.item.basePrice;

        if (cartItem.quantity == 0) state.cartItems.splice(index, 1);
      }
    },
    clearCart: state => {
      state.cartItems = [];

      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const getItemQuantity = itemId => {
  const cartItems = useSelector(state => state.cart.cartItems);

  const cartItem = cartItems.find(element => {
    return element.item.id === itemId;
  });

  return cartItem ? cartItem.quantity : 0;
};

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
