import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useEnrolledClasses = ( uid ) => {
    const { axiosSecure } = useAxiosSecure();
    const { refetch, data: enrolledClasses = [], isLoading, isError } = useQuery( [ 'enrolledClasses', uid ], async () => {
        try {
            const response = await axiosSecure.get( `${ import.meta.env.VITE_BACKEND_URL }/users/students/enrolledClasses/${ uid }` );
            return response.data;
        } catch ( error ) {
            console.log( error );
        }
    } );
    return {
        refetch,
        enrolledClasses,
        isLoading,
        isError
    };
};

export default useEnrolledClasses;
