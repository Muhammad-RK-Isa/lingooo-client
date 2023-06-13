import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create( {
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

const useAxiosSecure = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    useEffect( () => {
        axiosSecure.interceptors.request.use( ( config ) => {
            const token = sessionStorage.getItem( 'access-token' );
            if ( token ) {
                config.headers.Authorization = `Bearer ${ token }`;
            }
            return config;
        } );

        axiosSecure.interceptors.response.use(
            ( response ) => response,
            async ( error ) => {
                if ( error.response && ( error.response.status === 401 || error.response.status === 403 ) ) {
                    await signOut();
                    navigate( '/login' );
                }
                return Promise.reject( error );
            }
        );
    }, [ signOut, navigate ] );
    return axiosSecure;
};

export default useAxiosSecure;