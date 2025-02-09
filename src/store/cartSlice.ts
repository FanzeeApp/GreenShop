import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../interfaces";

const loadCartFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return { items: [], totalQuantity: 0 };
};

const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    }
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
