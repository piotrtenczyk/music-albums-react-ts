import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./pageStructure/Page";
import ItunesAlbumList from "./pages/ItunesAlbumList/ItunesAlbumList";
import OurAlbums from "./pages/OurAlbums";
import ShoppingCart from "./common/ShoppingCart";

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
        element: <ShoppingCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
