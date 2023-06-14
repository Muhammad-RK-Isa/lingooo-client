import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from '../Layouts/Dashboard/Dashboard';
import Login from "../Pages/Login/Login";
import Registration from './../Pages/Registration/Registration';
import RestrictedRoute from './RestrictedRoute';
import Classes from "../Pages/Classes/Classes";

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
                path: '/error',
                element: <Error />
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
            {
                path: '/dashboard/*',
                element: <RestrictedRoute><Dashboard /></RestrictedRoute>,
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to='/error' />
    }
] );

export default routes;