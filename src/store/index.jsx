import { configureStore } from '@reduxjs/toolkit';
import isLoadingSlice from './isLoading.slice'; 

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice
    }
})