import { Navigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const RestrictedRoute = ( { children } ) => {
    const { user, loading } = useAuth();
    if ( loading & !user ) {
        return <Navigate state={ { from: location } } to="/login" replace />;
    } else {
        return children;
    }
};

export default RestrictedRoute;