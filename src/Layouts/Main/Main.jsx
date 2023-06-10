import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidepanel_Main from '../../Shared/Sideplanels/Sidepanel_Main';

export const MainContext = createContext();

const Main = () => {

    const [ isOpen, setIsOpen ] = useState( false );
    const props = {
        isOpen,
        setIsOpen
    };
    return (
        <MainContext.Provider value={ props }>
            <Sidepanel_Main />
            <Outlet />
        </MainContext.Provider>
    );
};

export default Main;