import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getStudentsCount = async ( uid ) => {
    const response = await axios.get( `http://192.168.0.179:5000/instructors/students/count/${uid}` );
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
