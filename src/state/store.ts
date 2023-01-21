import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
export type RootState = ReturnType<typeof store.getState>;

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });
