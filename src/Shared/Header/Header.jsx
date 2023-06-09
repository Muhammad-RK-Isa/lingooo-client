import { useEffect, useState } from "react";

const Header = () => {

    const [ isDark, setIsDark ] = useState( false );

    useEffect( () => {
        if ( isDark ) {
            document.querySelector( 'body' ).classList.add( 'dark' );
        } else {
            document.querySelector( 'body' ).classList.remove( 'dark' );
        }
    }, [ isDark ] );

    return (
        <div>
            <button onClick={ () => setIsDark( !isDark ) }>toggle</button>
        </div>
    );
};

export default Header;