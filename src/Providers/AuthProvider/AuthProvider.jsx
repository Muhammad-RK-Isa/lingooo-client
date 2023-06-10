import { createContext, useState } from "react";

export const AuthContext = createContext( null );

const AuthProvider = ( { children } ) => {

    const [ user, setUser ] = useState( {
        displayName: 'Kobir vai',
        email: 'example@email.com'
    } );

    const props = {
        user
    };

    return (
        <AuthContext.Provider value={ props }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;