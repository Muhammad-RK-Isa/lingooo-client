import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const DashboardRoute = ( { children } ) => {
    const { setLoading } = useAuth();
    const location = useLocation();
    const path = location.pathname.split( "/" )[ 2 ];
    const [ userRole, setUserRole ] = useState( undefined );

    const { role } = useRole();
    useEffect( () => {
        if ( role ) {
            console.log( role)
            setUserRole( role );
        }
    }, [ role ] );

    if ( userRole ) {
        if ( role === path ) {
            return children;
        } else {
            return <Navigate to={ `${ role }` } />;
        }
    }
};

export default DashboardRoute;