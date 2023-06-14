import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClasses = ( uid ) => {
    const { axiosSecure } = useAxiosSecure();
    const { refetch, data: classes = [], isLoading, isError } = useQuery( [ 'selectedClasses', uid ], async () => {
        try {
            const response = await axiosSecure.get( `${ import.meta.env.VITE_BACKEND_URL }/users/students/selectedClasses/${ uid }` );
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
