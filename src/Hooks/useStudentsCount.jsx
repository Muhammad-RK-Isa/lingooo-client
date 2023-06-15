import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const getStudentsCount = async ( uid ) => {
    const response = await axios.get( `${ import.meta.env.VITE_BACKEND_URL }/instructors/students/count/${ uid }` );
    return response.data.totalEnrollments;
};

const useStudentsCount = () => {
    const { user } = useAuth();
    const { refetch, data: studentsCount = [], isLoading, isError } = useQuery( [ 'studentsCount', user?.uid ], () => getStudentsCount( user?.uid ) );
    return {
        refetch,
        studentsCount,
        isLoading,
        isError
    };
};

export default useStudentsCount;
