import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { useContext, useEffect, useRef, useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Banner from "../../Pages/Home/Banner";
import logo from '../../assets/svg/logo-gradient.svg';
import logo_white from '../../assets/svg/logo-white-transparent.svg';
import { AuthContext } from './../../Providers/AuthProvider/AuthProvider';
import { MainContext } from "../../Layouts/Main/Main";

const Header = () => {

    const { user } = useContext( AuthContext );
    const { isOpen, setIsOpen } = useContext( MainContext );

    const navRef = useRef();

    const [ isDark, setIsDark ] = useState( false );
    const [ brandLogo, setBrandLogo ] = useState( logo_white );
    const [ openMenu, setOpenMenu ] = useState( false );
    const triggers = {
        onMouseEnter: () => setOpenMenu( true ),
        onMouseLeave: () => setOpenMenu( false ),
    };

    useEffect( () => {
        if ( isDark ) {
            document.querySelector( 'body' ).classList.add( 'dark' );
        } else {
            document.querySelector( 'body' ).classList.remove( 'dark' );
        }
    }, [ isDark ] );

    useEffect( () => {
        window.addEventListener( 'scroll', () => {
            const nav = navRef.current;
            if ( window.scrollY > 30 ) {
                nav.classList.add( 'bg-white', 'shadow-md', 'drop-shadow-md', 'dark:bg-black', 'dark:bg-opacity-50', 'dark:backdrop-blur' );
                nav.classList.replace( 'text-white', 'text-black' );
                nav.classList.replace( 'text-white', 'text-black' );
                setBrandLogo( logo );
            } else {
                nav.classList.remove( 'bg-white', 'shadow-md', 'drop-shadow-md', 'dark:bg-black', 'dark:bg-opacity-50', 'dark:backdrop-blur' );
                nav.classList.replace( 'text-black', 'text-white' );
                setBrandLogo( logo_white );
            }
        } );
    }, [] );


    return (
        <header className="w-full bg-gradient-to-b from-primary to-secondary pb-16 lg:pb-20" >
            <nav ref={ navRef } className="w-full fixed top-0 z-20 text-white dark:text-white  duration-200 pl-2 pr-4 lg:p-0">
                <div className="flex items-center justify-between gap-8 w-full h-16 max-w-screen-xl mx-auto lg:py-2 box-content">
                    <div className="hidden lg:flex gap-8 items-center">
                        <Link
                            to='/'
                            className="text-xl duration-200 hover:opacity-60"
                        >
                            Home
                        </Link>
                        <Link
                            to='/instructors'
                            className="text-xl duration-200 hover:opacity-60"
                        >
                            Instructors
                        </Link>
                    </div>

                    <button onClick={ () => setIsOpen( true ) } className="p-2">
                        <HiOutlineMenuAlt1 size={ 28 } className="lg:hidden box-content" />
                    </button>

                    {/* Logo */ }
                    <Link to='/'>
                        <img src={ brandLogo } alt="logo" className="h-8 md:h-12" />
                    </Link>

                    <div className="flex gap-8 items-center justify-self-end">
                        <div className="hidden lg:flex gap-8 items-center">
                            <Link
                                to='/'
                                className="text-xl duration-200 hover:opacity-40"
                            >
                                Classes
                            </Link>
                            <Link
                                to='/instructors'
                                className="text-xl duration-200 hover:opacity-40"
                            >
                                Dashboard
                            </Link>
                        </div>

                        <div className="inline-flex gap-2 items-center">

                            <button onClick={ () => setIsDark( !isDark ) }>
                                {
                                    isDark ?
                                        <MdNightlight size={ 28 } className="box-content" />
                                        :
                                        <MdLightMode size={ 28 } className="box-content" />
                                }
                            </button>

                            {
                                !user ?
                                    <Link to="/login" className="text-xl duration-200 hover:opacity-40">
                                        Login
                                    </Link>
                                    :
                                    <Menu open={ openMenu } handler={ setOpenMenu } className="outline-none">
                                        <MenuHandler>
                                            <button
                                                { ...triggers }
                                                className="rounded-full p-2 box-content overscroll-hidden"
                                            >
                                                {
                                                    user?.photoURL ?
                                                        <img src={ user.photoURL } alt="user" className="w-10 h-10 rounded-full" />
                                                        :
                                                        <CgProfile size={ 28 } className="box-content" />
                                                }
                                            </button>
                                        </MenuHandler>
                                        <MenuList
                                            { ...triggers }
                                        >
                                            <div className="flex flex-col gap-3">
                                                <p>{ user?.displayName }</p>
                                                <p>{ user?.email }</p>
                                                <Button color="red" size="sm">Logout</Button>
                                            </div>
                                        </MenuList>
                                    </Menu>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {/* Banner */ }
            <div className="h-20 w-full mb-4 lg:mb-10" />
            <Banner />
        </header>
    );
};

export default Header;