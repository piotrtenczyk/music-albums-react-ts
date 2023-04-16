import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./pageStructure/Page";
import ItunesAlbumList from "./pages/ItunesAlbumList/ItunesAlbumList";
import OurAlbums from "./pages/OurAlbums";
import store from "./state/store";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
