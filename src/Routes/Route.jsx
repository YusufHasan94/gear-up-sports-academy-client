import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Banner from "../Pages/Home/Banner/Banner";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Banner></Banner>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
      ]
    },
  ]);