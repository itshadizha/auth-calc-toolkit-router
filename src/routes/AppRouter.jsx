import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Calculator from "../pages/Calculator";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRouter fallBackPath="/login" Component={<Calculator />} />
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
