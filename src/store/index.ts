import  { configureStore } from '@reduxjs/toolkit'
import { dogsApi } from '@services/dogsApi';

export default configureStore({
    reducer: {
        [dogsApi.reducerPath]: dogsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogsApi.middleware),
});