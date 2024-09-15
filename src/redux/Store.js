import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";


const store = configureStore({
    reducer:{
        AppSlice,
       
    }
})



export default store;
