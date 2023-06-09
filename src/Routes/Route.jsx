import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import NotFound from "../Pages/NotFound/NOtFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import SelectedClasses from "../Pages/Dashboard/User/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/User/EnrolledClasses/EnrolledClasses";

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
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "/dashboard/selectedClasses",
          element: <SelectedClasses></SelectedClasses>
        },{
          path: "/dashboard/enrolledClasses",
          element: <EnrolledClasses></EnrolledClasses>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);