import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getInstructors = async () => {
    const response = await axios.get( `${ import.meta.env.VITE_BACKEND_URL}/instructors` );
    return response.data;
};

const useInstructors = () => {
    const { refetch, data: instructors = [], isLoading, isError } = useQuery( [ 'instructors' ], getInstructors );
    return {
        refetch,
        instructors,
        isLoading,
        isError
    };
};

export default useInstructors;
