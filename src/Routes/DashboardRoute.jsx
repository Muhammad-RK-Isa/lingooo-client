import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";

const DashboardRoute = ( { children } ) => {
    const { role, isLoading } = useRole();
    const { setLoading } = useAuth();

    if ( isLoading ) {
        setLoading( true );
    } else {
        setLoading( false );
        const location = useLocation();
        const path = location.pathname.split( "/" )[ 2 ];
        if ( role?.role === path ) {
            return children;
        };
        return <Navigate to={ `${ role?.role }` } />;
    }
};

export default DashboardRoute;