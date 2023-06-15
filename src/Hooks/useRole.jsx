import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useRole = () => {
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();
    const { refetch, data: role = {}, isLoading, isError } = useQuery( [ 'role', user?.uid ], async () => {
        const response = await axiosSecure.get( `/auth/verify_user_role/${ user?.uid }` );
        return response.data;
    } );
    return {
        refetch,
        role,
        isLoading,
        isError
    };
};

export default useRole;