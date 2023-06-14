import { Navigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const RestrictedRoute = ( { children } ) => {
    const { user, loading } = useAuth();
    if ( loading ) {
        console.log( 'loading' );
    }
    if ( user ) {
        return children;
    }
    return <Navigate state={ { from: location } } to="/login" replace={ true } />;
};

export default RestrictedRoute;