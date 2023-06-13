import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFlag = async ( language ) => {
    const response = await axios.get( `${ import.meta.env.VITE_BACKEND_URL}/flags/single/${ language }` );
    return response.data;
};

const useFlag = ( language ) => {
    const { refetch, data: flag = {}, isLoading, isError } = useQuery( [ 'flag', language ], () => fetchFlag( language ) );
    return {
        refetch,
        flag,
        isLoading,
        isError
    };
};

export default useFlag;
