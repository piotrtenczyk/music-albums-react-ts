import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./pageStructure/Page";
import ItunesAlbumList from "./pages/ItunesAlbumList/ItunesAlbumList";
import OurAlbums from "./pages/OurAlbums";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import store from "./state/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/itunes-albums",
        element: <ItunesAlbumList />,
        // loader: albumsLoader,
      },
      {
        path: "/our-albums",
        element: <OurAlbums />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
