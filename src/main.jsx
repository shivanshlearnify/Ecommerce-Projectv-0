import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Nopage from "./pages/nopage/Nopage.jsx";
import ProductInfo from "./pages/productInfo/ProductInfo.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import AllProduct from "./components/allProduct/AllProduct.jsx";
import Login from "./pages/registration/login.jsx";
import Signup from "./pages/registration/Signup.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AddProductPage from "./pages/admin/AddProductPage.jsx";
import UpdateProductPage from "./pages/admin/UpdateProductPage.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";

import { ThemeProvider } from "@material-tailwind/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser.jsx";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

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
        path: "/productInfo/:id",
        element: <ProductInfo />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/allproduct",
        element: <AllProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/category/:categoryname",
        element: <CategoryPage />,
      },
      {
        path: "/user-dashboard",
        element: (
          <ProtectedRouteForUser>
            <UserDashboard />,
          </ProtectedRouteForUser>
        ),
      },
      {
        path: "/admin-dashboard",
        element: (
          <ProtectedRouteForAdmin>
            <AdminDashboard />,
          </ProtectedRouteForAdmin>
        ),
      },
      {
        path: "/addproduct",
        element: (
          <ProtectedRouteForAdmin>
            <AddProductPage />,
          </ProtectedRouteForAdmin>
        ),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <ProtectedRouteForAdmin>
            <UpdateProductPage />,
          </ProtectedRouteForAdmin>
        ),
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
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
