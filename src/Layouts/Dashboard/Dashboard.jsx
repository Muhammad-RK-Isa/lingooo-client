import { createContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader';
import Sidebar from './Sidebar';
import useRole from '../../Hooks/useRole';
import Nav from './Nav';
import { Toaster } from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';

export const DashboardContext = createContext();
const Dashboard = () => {
    const { setLoading } = useAuth();
    const location = useLocation();
    const path = location.pathname.split( '/' )[ 2 ];
    const [ sideBarOpen, setSideBarOpen ] = useState( false );
    const [ selectedContents, setSelectedContents ] = useState( 'selectedClasses' );
    const [ userRole, setUserRole ] = useState( undefined );
    const props = {
        sideBarOpen,
        setSideBarOpen,
        selectedContents,
        setSelectedContents
    };

    const { role } = useRole();

    useEffect( () => {
        if ( role ) {
            setUserRole( role );
        }
    }, [ role ] );

    if ( userRole && path !== 'payment' ) {
        setLoading( false );
        if ( role === path ) {
            return (
                <DashboardContext.Provider value={ props }>
                    <main>
                        <Loader />
                        <Toaster />
                        <Sidebar />
                        <div className='z-10 lg:ml-[20rem] bg-black bg-opacity-5 min-h-screen overflow-hidden'>
                            <Nav />
                            <div className='h-16 w-full' />
                            <Outlet />
                        </div>
                    </main>
                </DashboardContext.Provider>
            );
        } else {
            return <Navigate to={ `${ role }` } />;
        }
    } else {
        return (
            <DashboardContext.Provider value={ props }>
                <main>
                    <Loader />
                    <Toaster />
                    <Sidebar />
                    <div className='z-10 lg:ml-[20rem] bg-black bg-opacity-5 h-screen overflow-hidden relative'>
                        <Nav />
                        <div className='h-16 w-full' />
                        <Outlet />
                    </div>
                </main>
            </DashboardContext.Provider>
        );
    }
};

export default Dashboard;