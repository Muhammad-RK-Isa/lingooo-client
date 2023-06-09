import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from '../Layouts/Dashboard/Dashboard';
import Dashboard_Student from '../Pages/Dashboard/Dashboard_Student/Dashboard_Student';
import Dashboard_Instructor from '../Pages/Dashboard/Dashboard_Instructor/Dashboard_Instructor';
import Dashboard_Admin from '../Pages/Dashboard/Dashboard_Admin/Dashboard_Admin';

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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'student',
                element: <Dashboard_Student/>
            },
            {
                path: 'instructor',
                element: <Dashboard_Instructor/>
            },
            {
                path: 'admin',
                element: <Dashboard_Admin/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/error' />
    }
] );

export default routes;