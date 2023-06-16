import { createContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader';
import Sidebar from './Sidebar';
import useRole from '../../Hooks/useRole';
import Nav from './Nav';

export const DashboardContext = createContext();
const Dashboard = () => {
    const { role } = useRole();
    const location = useLocation();
    const path = location.pathname.split( '/' )[ 2 ];
    const [ sideBarOpen, setSideBarOpen ] = useState( false );
    const [ selectedContents, setSelectedContents ] = useState( null );
    const props = {
        sideBarOpen,
        setSideBarOpen
    };

    if ( !path ) {
        return <Navigate to={ `${ role?.role }` } />;
    }

    return (
        <DashboardContext.Provider value={ props }>
            <main className='dark:bg-black'>
                <Loader />
                <Sidebar />
                <div className='z-10 lg:ml-[20rem] bg-black bg-opacity-5'>
                    <Nav />
                    <Outlet />
                </div>
            </main>
        </DashboardContext.Provider>
    );
};

export default Dashboard;