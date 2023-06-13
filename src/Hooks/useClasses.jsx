import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchClasses = async ( quantity ) => {
    const url = quantity ? `http://192.168.0.179:5000/classes?quantity=${ quantity }` : 'http://192.168.0.179:5000/classes';
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
