import logo from '../../assets/svg/logo-gradient.svg';
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useRole from '../../Hooks/useRole';
import { DashboardContext } from './Dashboard';

const Nav = () => {
    const { user, logOut } = useAuth();
    const { setSideBarOpen } = useContext( DashboardContext );
    const { role } = useRole();

    const [ isDark, setIsDark ] = useState( localStorage?.getItem( 'theme' ) === 'dark' ? true : false || false );
    const [ openMenu, setOpenMenu ] = useState( false );
    const triggers = {
        onMouseEnter: () => setOpenMenu( true ),
        onMouseLeave: () => setOpenMenu( false ),
    };

    const handleLogout = () => {
        Swal.fire( {
            title: 'Are you sure you want to logout?',
            showCancelButton: true,
            confirmButtonText: 'Logout',
            customClass: {
                confirmButton: '!bg-red-500 !text-white',
                cancelButton: '!bg-white !text-black'
            }
        } ).then( ( result ) => {
            if ( result.isConfirmed ) {
                logOut();
            };
        } );
    };


    useEffect( () => {
        if ( isDark ) {
            document.querySelector( 'body' ).classList.add( 'dark' );
            localStorage.setItem( 'theme', 'dark' );
        } else {
            document.querySelector( 'body' ).classList.remove( 'dark' );
            localStorage.setItem( 'theme', 'light' );
        }
    }, [ isDark ] );

    return (
        <nav className={ `bg-white dark:bg-dark text-black dark:text-white w-full sticky top-0 z-20  pl-2 pr-4 lg:p-0` }>
            <div className="flex items-center justify-between gap-8 w-full h-16 max-w-screen-xl mx-auto lg:py-2 box-content">
                <button onClick={ () => setSideBarOpen( true ) } className="p-2">
                    <HiOutlineMenuAlt1 size={ 28 } className="lg:hidden box-content" />
                </button>
                {/* Logo */ }
                <Link to='/'>
                    <img src={ logo } alt="logo" className="h-8 md:h-12" />
                </Link>

                <div className="flex gap-8 items-center justify-self-end">
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
                                <Menu open={ openMenu } handler={ setOpenMenu } className="dark:bg-dark dark:text-white outline-none border-none ring-0 focus:outline-none focus:ring-0 focus:border-none hover:outline-none hover:border-none hover:ring-0">
                                    <MenuHandler className="inline-flex items-center outline-none border-none ring-0 focus:outline-none focus:ring-0 focus:border-none hover:outline-none hover:border-none hover:ring-0">
                                        <button
                                            { ...triggers }
                                            className="rounded-full p-2 box-content overscroll-hidden"
                                        >
                                            {
                                                user?.photoURL ?
                                                    <img src={ user.photoURL } alt="user" className="w-7 h-7 rounded-full" />
                                                    :
                                                    <CgProfile size={ 28 } className="box-content" />
                                            }
                                            <div className='hidden lg:flex flex-col text-left ml-2'>
                                                <p className='opacity-80 text-sm'>{ user?.displayName }</p>
                                                <p className='opacity-60 text-xs'>{ role?.role }</p>
                                            </div>
                                        </button>
                                    </MenuHandler>
                                    <MenuList
                                        { ...triggers }
                                        className='dark:bg-dark dark:text-white outline-none p-4 border-none ring-0 focus:outline-none focus:ring-0 focus:border-none hover:outline-none hover:border-none hover:ring-0'
                                    >
                                        <div className="flex flex-col gap-3 border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-none hover:outline-none hover:border-none hover:ring-0">
                                            <p>{ user?.displayName }</p>
                                            <p>{ user?.email }</p>
                                            <Button color="red" size="sm" onClick={ handleLogout }>Logout</Button>
                                        </div>
                                    </MenuList>
                                </Menu>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;