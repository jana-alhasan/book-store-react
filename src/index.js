import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootPage from "./RootPage";
import Home from "./Pages/Home";
import Product from "./Pages/Product/Product";
import SearchPage from "./Pages/SearchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:bookId", element: <Product /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
