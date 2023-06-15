import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../Components/Loader';

export const DashboardContext = createContext();
const Dashboard = () => {
    const [ sideBarOpen, setSideBarOpen ] = useState( false );
    const props = {
        sideBarOpen,
        setSideBarOpen
    };

    return (
        <DashboardContext.Provider value={ props }>
            <main>
                <Loader />
                <Outlet />
            </main>
        </DashboardContext.Provider>
    );
};

export default Dashboard;