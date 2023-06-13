import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getStudentsCount = async ( uid ) => {
    const response = await axios.get( `${ import.meta.env.VITE_BACKEND_URL}/instructors/students/count/${ uid }` );
    return response.data.totalEnrollments;
};

const useStudentsCount = ( uid ) => {
    const { refetch, data: studentsCount = [], isLoading, isError } = useQuery( [ 'studentsCount', uid ], () => getStudentsCount( uid ) );
    return {
        refetch,
        studentsCount,
        isLoading,
        isError
    };
};

export default useStudentsCount;
