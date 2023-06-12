import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidepanel_Main from '../../Shared/Sideplanels/Sidepanel_Main';
import Footer from './../../Shared/Footer/Footer';
import Navbar from '../../Components/Navbar';
import { Toaster } from 'react-hot-toast';
import Loader from '../../Components/Loader';

export const MainContext = createContext();

const Main = () => {

    const [ isOpen, setIsOpen ] = useState( false );
    const props = {
        isOpen,
        setIsOpen
    };
    return (
        <MainContext.Provider value={ props }>
            <Loader/>
            <Toaster />
            <Navbar />
            <Sidepanel_Main />
            <Outlet />
            <Footer />
        </MainContext.Provider>
    );
};

export default Main;