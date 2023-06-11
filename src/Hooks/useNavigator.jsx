import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavigator = () => {
    const navigate = useNavigate();
    const [ isHome, setIsHome ] = useState( window.location.pathname === '/' );
    const navigator = ( path ) => {
        setIsHome( path === '/' );
        navigate( path );
    };
    return { isHome, setIsHome, navigator };
};

export default useNavigator;