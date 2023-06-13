import { Navigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const DashboardRoute = () => {
    const { user, loading } = useAuth();
    
};

export default DashboardRoute;