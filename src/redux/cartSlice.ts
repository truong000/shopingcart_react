import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../pages/Cart';

interface CartItem {
  id: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export default cartSlice.reducer
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;