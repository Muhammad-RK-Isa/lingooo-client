import { useContext } from 'react';
import { ServerRequestContext } from '../Providers/ServerRequestProvider/ServerRequestProvider';

const useServer = () => {
    const serverUtils = useContext( ServerRequestContext );
    return serverUtils;
};

export default useServer;