import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const fetchClasses = async ( quantity ) => {
    const url = quantity ? `http://192.168.0.179:5000/classes?quantity=${ quantity }` : 'http://192.168.0.179:5000/classes';
    const response = await axios.get( url );
    return response.data;
};

const useClasses = ( quantity ) => {
    const { setLoading } = useAuth();
    const { refetch, data: classes = [], isLoading, isError } = useQuery( [ 'classes', quantity ], () => fetchClasses( quantity ) );
    useEffect( () => {
        if ( isLoading ) {
            setLoading( true );
        }
    }, [] );

    return {
        refetch,
        classes,
        isLoading,
        isError
    };
};

export default useClasses;
