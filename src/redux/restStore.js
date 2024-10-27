import { configureStore } from "@reduxjs/toolkit";
import foodSlice from './slices/foodSlice';

const restStore = configureStore({
    reducer: {
        foodReducer: foodSlice 
    }
});

export default restStore;
