import {configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./authSlice";
import  socketReducer  from "./socketSlice";

const store = configureStore({
     reducer: {
        auth: authSlice,
        socket: socketReducer
     },
});

export default store;