import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.name === action.payload.name);
      if (item) {
        if (action.payload.quantity > 0) {
          item.quantity = action.payload.quantity;
        } else {
          state.items = state.items.filter(i => i.name !== action.payload.name);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
