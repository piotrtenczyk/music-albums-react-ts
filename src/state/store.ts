import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export default store;
