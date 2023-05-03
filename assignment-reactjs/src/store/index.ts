import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import productsSlice from "../slice/products";
import { productApi } from "../sevices/products";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        // product: productsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
