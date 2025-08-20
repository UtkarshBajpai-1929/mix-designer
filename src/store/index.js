import {configureStore} from "@reduxjs/toolkit";
import { inputSlice } from "./inputSlice";
import { calculatedSlice } from "./calculatedSlice";
const inputStore = configureStore({
  reducer:{
    input: inputSlice.reducer,
    calculation: calculatedSlice.reducer,

  }

});
export default inputStore;