import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useReviews = () => {
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();
    const { refetch, data: reviews = [], isLoading, isError } = useQuery( [ 'reviews', user?.uid ], async () => {
        try {
            const response = await axiosSecure.get( `/student/reviews` );
            return response.data;
        } catch ( error ) {
            console.log( error );
        }
    } );
    return {
        refetch,
        reviews,
        isLoading,
        isError
    };
};

export default useReviews;
