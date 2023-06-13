import { app } from './../../Firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';

// ! Auth Context
export const AuthContext = createContext( null );

const AuthProvider = ( { children } ) => {

    const auth = getAuth( app );
    const [ user, setUser ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );

    // ! Auth Contexts and stuffs
    const signIn = ( email, password ) => {
        setIsLoading( true );
        return signInWithEmailAndPassword( auth, email, password );
    };

    const signInWithGoogle = () => {
        setIsLoading( true );
        return signInWithPopup( auth, new GoogleAuthProvider() );
    };

    const signUp = ( email, password ) => {
        setIsLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    };

    const updateUserProfile = ( displayName, photoURL ) => {
        setIsLoading( true );
        return updateProfile( auth.currentUser, {
            displayName,
            photoURL
        } );
    };

    const logOut = () => {
        setIsLoading( true );
        return signOut( auth );
    };

    const requestAccessToken = async ( uid ) => {
        try {
            const response = await fetch( `${ import.meta.env.VITE_BACKEND_URL }/auth/request_access_token`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify( { uid } )
            } );
            const data = await response.json();
            sessionStorage.setItem( 'access-token', data.token );
        }
        catch ( error ) {
            console.log( error );
        }
    };

    const props = {
        user,
        setUser,
        signIn,
        signUp,
        updateUserProfile,
        logOut,
        signInWithGoogle,
        isLoading,
        setIsLoading
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser( currentUser );
            if ( currentUser ) {
                requestAccessToken( currentUser.uid );
            } else {
                sessionStorage.removeItem( 'access-token' );
            }
            setIsLoading( false );
        } );

        return () => {
            unsubscribe();
        };
    }, [] );


    return (
        <AuthContext.Provider value={ props }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;