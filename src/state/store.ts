import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import shoppingCart from "./shoppingCartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: shoppingCart.reducer,
  middleware: [logger],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
