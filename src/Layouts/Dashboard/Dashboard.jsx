import { Navigate, useParams } from 'react-router-dom';
import useRole from '../../Hooks/useRole';
import Dashboard_Student from '../../Pages/Dashboard/Dashboard_Student/Dashboard_Student';
import Dashboard_Instructor from '../../Pages/Dashboard/Dashboard_Instructor/Dashboard_Instructor';
import Dashboard_Admin from '../../Pages/Dashboard/Dashboard_Admin/Dashboard_Admin';
import { createContext, useState } from 'react';
import Payment from '../../Pages/Dashboard/Dashboard_Student/Payment';

export const DashboardContext = createContext();
const Dashboard = () => {
    const { role } = useRole();
    const params = useParams();
    const [ selectedClass, setSelectedClass ] = useState( null );
    const props = {
        selectedClass,
        setSelectedClass
    };

    return (
        <DashboardContext.Provider value={ props }>
            {
                role?.role === 'student' && < Dashboard_Student />
            }
            {
                role?.role === 'admin' && < Dashboard_Admin />
            }
            {
                role?.role === 'instructor' && < Dashboard_Instructor />
            }
        </DashboardContext.Provider>
    );
};

export default Dashboard;