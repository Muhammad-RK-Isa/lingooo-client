import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useEnrolledClasses = () => {
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();
    const { refetch, data: enrolledClasses = [], isLoading, isError } = useQuery( [ 'enrolledClasses', user?.uid ], async () => {
        try {
            const response = await axiosSecure.get( `${ import.meta.env.VITE_BACKEND_URL }/users/students/enrolledClasses/${ user?.uid }` );
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
