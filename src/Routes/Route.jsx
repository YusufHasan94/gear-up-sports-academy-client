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
import Payment from "../Pages/Dashboard/User/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/User/Payment/PaymentHistory";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses/MyClasses";
import TotalStudents from "../Pages/Dashboard/Instructor/TotalStudents/TotalStudents";
import AdminRoute from "./AdminRoute";

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
        },{
          path: "/dashboard/payment",
          element: <Payment></Payment>
        },{
          path: "/dashboard/paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        //admin route
        {
          path: "/dashboard/admin/manageClasses",
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },{
          path: "/dashboard/admin/manageUsers",
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        //instructor route
        {
          path: "/dashboard/instructor/addClass",
          element: <AddClass></AddClass>
        },{
          path: "/dashboard/instructor/myClasses",
          element: <MyClasses></MyClasses>
        },{
          path: "/dashboard/instructor/totalStudents",
          element: <TotalStudents></TotalStudents>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);