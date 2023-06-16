import { Navigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import Loader from "../Components/Loader";

const RestrictedRoute = ( { children } ) => {
    const { user, loading } = useAuth();
    if ( loading ) {
        return <Loader />;
    }
    if ( user ) {
        return children;
    }
    return <Navigate state={ { from: location } } to="/login" replace={ true } />;
};

export default RestrictedRoute;