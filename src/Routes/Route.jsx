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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import DashboardHome from "../Pages/Dashboard/Dashboard/DashboardHome";

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
          path: "/dashboard/home",
          element: <DashboardHome></DashboardHome>
        },{
          path: "/dashboard/user/selectedClasses",
          element: <SelectedClasses></SelectedClasses>
        },{
          path: "/dashboard/user/enrolledClasses",
          element: <EnrolledClasses></EnrolledClasses>
        },{
          path: "/dashboard/user/payment",
          element: <Payment></Payment>
        },{
          path: "/dashboard/user/paymentHistory",
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
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },{
          path: "/dashboard/instructor/myClasses",
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute> 
        }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);