import { createContext } from 'react';
export const ServerRequestContext = createContext();
const ServerRequestProvider = ( { children } ) => {
    const props = {};
    return (
        <ServerRequestContext.Provider value={ props }>
            { children }
        </ServerRequestContext.Provider>
    );
};

export default ServerRequestProvider;