import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
export type RootState = ReturnType<typeof store.getState>;

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
