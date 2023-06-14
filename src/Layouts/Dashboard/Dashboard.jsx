import { Navigate, useParams } from 'react-router-dom';
import useRole from '../../Hooks/useRole';
import Dashboard_Student from '../../Pages/Dashboard/Dashboard_Student/Dashboard_Student';
import Dashboard_Instructor from '../../Pages/Dashboard/Dashboard_Instructor/Dashboard_Instructor';
import Dashboard_Admin from '../../Pages/Dashboard/Dashboard_Admin/Dashboard_Admin';
const Dashboard = () => {
    const { role } = useRole();
    const params = useParams();
    const pathname = params[ "*" ];

    if ( params && pathname === role.role ) {
        switch ( role.role ) {
            case 'student':
                return <Dashboard_Student />;
            case 'instructor':
                return <Dashboard_Instructor />;
            case 'admin':
                return <Dashboard_Admin />;
        }
    }
    return <Navigate to={ `/dashboard/${ role.role }` } replace={ true } />;

};

export default Dashboard;