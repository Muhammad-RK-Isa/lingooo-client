import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const fetchClasses = async ( quantity, filter ) => {
    const url = `${ import.meta.env.VITE_BACKEND_URL }/classes`;
    const params = {};

    if ( quantity ) {
        params.quantity = quantity;
    }

    if ( filter ) {
        params.filter = filter;
    }

    const response = await axios.get( url, { params } );
    return response.data;
};


const useClasses = ( quantity, filter ) => {
    const { refetch, data: classes = [], isLoading, isError } = useQuery( [ 'classes', quantity ], () => fetchClasses( quantity, filter ) );
    return {
        refetch,
        classes,
        isLoading,
        isError
    };
};

export default useClasses;
