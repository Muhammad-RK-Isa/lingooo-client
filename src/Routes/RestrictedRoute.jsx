import { Navigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import { toast } from "react-hot-toast";

const RestrictedRoute = ( { children } ) => {
    const { user, loading } = useAuth();
    if ( loading ) {
        console.log( 'loading' );
    }
    if ( user ) {
        return children;
    }
    toast.error( 'Please login to continue.' );
    return <Navigate state={ { from: location } } to="/login" replace={ true } />;
};

export default RestrictedRoute;