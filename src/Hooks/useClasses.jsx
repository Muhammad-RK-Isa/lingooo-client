import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchClasses = async ( quantity ) => {
    const url = quantity ? `${ import.meta.env.VITE_BACKEND_URL }/classes?quantity=${ quantity }` : `${ import.meta.env.VITE_BACKEND_URL }/classes`;
    const response = await axios.get( url );
    return response.data;
};

const useClasses = ( quantity ) => {
    const { refetch, data: classes = [], isLoading, isError } = useQuery( [ 'classes', quantity ], () => fetchClasses( quantity ) );
    return {
        refetch,
        classes,
        isLoading,
        isError
    };
};

export default useClasses;
