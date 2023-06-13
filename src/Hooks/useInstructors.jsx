import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getInstructors = async () => {
    const response = await axios.get( `http://192.168.0.179:5000/instructors` );
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
