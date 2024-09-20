import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push(item);
        state.totalQty++;
      }
      state.totalPrice += item.price;
    },

    removeItem: (state, action) => {
      const removalItem = state.items.find((item) => item.id == action.payload);

      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice -= removalItem.qty * removalItem.price;
      state.totalQty--;
    },

    decreaseQty: (state, action) => {
      const itemId = action.payload;
      const itemToDecrease = state.items.find((item) => item.id === itemId);

      if (itemToDecrease) {
        if (itemToDecrease.qty > 1) {
          itemToDecrease.qty -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== itemId);
          state.totalQty--;
        }
        state.totalPrice -= itemToDecrease.price;
      }
    },
  },
});

export const { addItem, removeItem, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;
