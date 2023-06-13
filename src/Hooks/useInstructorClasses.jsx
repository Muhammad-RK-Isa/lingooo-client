import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchClasses = async ( uid ) => {
    const response = await axios.get( `${ import.meta.env.VITE_BACKEND_URL }/instructors/classes/${ uid }` );
    return response.data;
};

const useInstructorClasses = ( uid ) => {
    const { refetch, data: classes = [], isLoading, isError } = useQuery( [ 'classes', uid ], () => fetchClasses( uid ) );
    return {
        refetch,
        classes,
        isLoading,
        isError
    };
};

export default useInstructorClasses;
