import { useEffect } from "react";

const scrollToTopOnRender = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
};

export default scrollToTopOnRender;