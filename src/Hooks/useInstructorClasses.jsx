import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const fetchClasses = async ( uid ) => {
    const response = await axios.get( `${ import.meta.env.VITE_BACKEND_URL }/instructors/classes/${ uid }` );
    return response.data;
};

const useInstructorClasses = () => {
    const { user } = useAuth();
    const { refetch, data: classes = [], isLoading, isError } = useQuery( [ 'instructorClasses', user?.uid ], async () => fetchClasses( user?.uid ) );
    return {
        refetch,
        classes,
        isLoading,
        isError
    };
};

export default useInstructorClasses;
