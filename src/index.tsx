import React from "react";
import ReactDOM from "react-dom/client";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import "./index.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./pageStructure/Page";
import ItunesAlbumList from "./pages/ItunesAlbumList/ItunesAlbumList";
import OurAlbums from "./pages/OurAlbums";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/itunes-albums",
        element: <ItunesAlbumList />,
      },
      {
        path: "/our-albums",
        element: <OurAlbums />,
      },
    ],
  },
]);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { incremented, decremented } = counterSlice.actions;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
