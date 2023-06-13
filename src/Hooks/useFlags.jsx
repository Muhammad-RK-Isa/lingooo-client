import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFlags = async ( uid ) => {
    const response = await axios.get( `${ import.meta.env.VITE_BACKEND_URL}/flags/instructor/${ uid }` );
    return response.data;
};

const useFlags = ( uid ) => {
    const { refetch, data: flags = {}, isLoading, isError } = useQuery( [ 'flag', uid ], () => fetchFlags( uid ) );
    return {
        refetch,
        flags,
        isLoading,
        isError
    };
};

export default useFlags;
