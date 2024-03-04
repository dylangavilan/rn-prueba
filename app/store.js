import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./newsReducer";
import userSlice from "./auth";
import journalsSlice from "./journals";
import cryptoSlice from "./crypto";

const rootReducer = combineReducers({
    newspapers: dataSlice,
    auth: userSlice,
    journals: journalsSlice,
    crypto: cryptoSlice
});

const store = configureStore({
    reducer: rootReducer,  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })});

export default store;
