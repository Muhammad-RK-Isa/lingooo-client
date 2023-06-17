import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from '../Layouts/Dashboard/Dashboard';
import Main from "../Layouts/Main/Main";
import Classes from "../Pages/Classes/Classes";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Registration from './../Pages/Registration/Registration';
import DashboardRoute from "./DashboardRoute";
import RestrictedRoute from './RestrictedRoute';
import Dashboard_Student from "../Pages/Dashboard_Student/Dashboard_Student";
import Dashboard_Instructor from "../Pages/Dashboard_Instructor/Dashboard_Instructor";
import Dashboard_Admin from "../Pages/Dashboard_Admin/Dashboard_Admin";
import Payment from './../Pages/Payment/Payment';

const routes = createBrowserRouter( [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/classes',
                element: <Classes />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <RestrictedRoute><Dashboard /></RestrictedRoute>,
        children: [
            {
                path: 'student',
                element: <RestrictedRoute><DashboardRoute><Dashboard_Student /></DashboardRoute></RestrictedRoute>
            },
            {
                path: 'instructor',
                element: <RestrictedRoute><DashboardRoute><Dashboard_Instructor /></DashboardRoute></RestrictedRoute>
            },
            {
                path: 'admin',
                element: <DashboardRoute><Dashboard_Admin /></DashboardRoute>
            },
            {
                path: 'payment/:_id',
                element: <Payment />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="error" />
    },
    {
        path: 'error',
        element: <Error />
    }
] );

export default routes;