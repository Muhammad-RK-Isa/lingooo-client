import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useSelectedClasses = () => {
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();
    const { refetch, data: classes = [], isLoading, isError } = useQuery( [ 'selectedClasses', user?.uid ], async () => {
        try {
            const response = await axiosSecure.get( `${ import.meta.env.VITE_BACKEND_URL }/users/students/selectedClasses/${ user?.uid }` );
            return response.data;
        } catch ( error ) {
            console.log( error );
        }
    } );
    return {
        refetch,
        classes,
        isLoading,
        isError
    };
};

export default useSelectedClasses;
