import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Nopage from "./pages/nopage/Nopage.jsx";
import ProductInfo from "./pages/productInfo/ProductInfo.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/productInfo",
        element: <ProductInfo />,
      },
      {
        path: "/*",
        element: <Nopage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
