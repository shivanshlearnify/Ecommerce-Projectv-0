import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./cartSlice"; // Change this line

export const store = configureStore({
  reducer: {
    cart: cartSlice // Change this line
  },
});
