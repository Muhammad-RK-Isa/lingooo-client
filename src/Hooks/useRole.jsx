import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const getRole = async ( uid ) => {
    const response = await fetch( `${ import.meta.env.VITE_BACKEND_URL }/user/role/${ uid }` );
    return response.data;
};

const useRole = () => {
    const { user } = useAuth();
    const { refetch, data: role = {}, isLoading, isError } = useQuery( [ 'role', user?.uid ], () => getRole( user?.uid ) );
    return {
        refetch,
        role,
        isLoading,
        isError
    };
};

export default useRole;