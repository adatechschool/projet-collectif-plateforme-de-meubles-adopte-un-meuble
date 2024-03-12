import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import SellPage from "./SellPage.jsx";
import PaymentPage from "./PaymentPage.jsx";
import CategoryPage from "./CategoryPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Articlepage from "./Articlepage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sell",
    element: <SellPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },

  {
    path: "/article",
    element: <Articlepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
