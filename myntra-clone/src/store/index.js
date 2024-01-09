import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const myntaStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetching:fetchStatusSlice.reducer,

  },
});
export default myntaStore;