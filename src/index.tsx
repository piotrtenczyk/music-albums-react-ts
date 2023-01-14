import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeesListPage from "./pages/EmployeesListPage";
import EmployeePage from "./pages/EmployeePage";
import Page from "./pageStructure/Page";
import ContactFormPage from "./pages/ContactFormPage";
import LayoutDemo from "./pages/LayoutDemo";
import ContactFormPage2 from "./pages/ContactFormPage2";
import ItunesAlbumList from "./pages/ItunesAlbumList/ItunesAlbumList";
import OurAlbums from "./pages/OurAlbums";

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
        path: "contact",
        element: <ContactFormPage />,
        // loader: contactLoader,
      },
      {
        path: "contact2",
        element: <ContactFormPage2 />,
        // loader: contactLoader,
      },
      {
        path: "/layout-demo",
        element: <LayoutDemo />,
      },
      {
        path: "/employees-list",
        element: <EmployeesListPage />,
      },
      {
        path: "/employee/:id",
        element: <EmployeePage />,
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
  <RouterProvider router={router} />
);
