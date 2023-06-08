import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },{
            path: "/instructors",
            element: <Instructors></Instructors>
        },{
            path: "/classes",
            element: <Classes></Classes>
        },

      ]
    },
  ]);