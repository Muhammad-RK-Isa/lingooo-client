import { createContext } from "react";

export const AuthContext = createContext( null );

const AuthProvider = ( { children } ) => {

    const props = {};

    return (
        <AuthContext.Provider value={ props }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;