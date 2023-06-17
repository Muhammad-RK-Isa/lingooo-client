import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    HomeIcon,
    UserGroupIcon,
    BookOpenIcon
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardContext } from "./Dashboard";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {

    const navigate = useNavigate();
    const { sideBarOpen, setSideBarOpen, setSelectedContents } = useContext( DashboardContext );
    const [ open, setOpen ] = useState( 0 );
    const handleOpen = ( value ) => {
        setOpen( open === value ? 0 : value );
    };

    const handleLink = async ( content ) => {
        await setSelectedContents( content );
        navigate( '/dashboard' );
    };

    useEffect( () => {
        const handleResize = () => {
            const width = window.innerWidth;
            if ( width >= 768 ) {
                setSideBarOpen( true );
            } else {
                setSideBarOpen( false );
            }
        };

        window.addEventListener( 'resize', handleResize );
        handleResize();

        return () => {
            window.removeEventListener( 'resize', handleResize );
        };
    }, [] );

    return (
        <AnimatePresence>
            { sideBarOpen && (
                <>
                    <input
                        type="button"
                        className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-10 backdrop-blur-sm z-40"
                        onClick={ () => setSideBarOpen( false ) }
                    />
                    <motion.div
                        initial={ { x: '-100%' } }
                        animate={ { x: 0 } }
                        exit={ { x: '-100%' } }
                        transition={ { duration: 0.3 } }
                        className="fixed top-0 left-0 h-[120vh] w-full max-w-[18rem] lg:max-w-[20rem] shadow-xl lg:shadow-none shadow-blue-gray-900/5 z-50"
                    >
                        <Card className="h-full w-full rounded-none z-50 lg:shadow-none bg-white dark:bg-dark">
                            <div className="mb-2 p-4">
                                <Typography variant="h5" color="blue-gray" className="dark:text-white h-16 lg:py-2">
                                    Dashboard
                                </Typography>
                            </div>
                            <List className="text-dark dark:text-white">
                                <Accordion
                                    open={ open === 1 }
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={ 2.5 }
                                            className={ `mx-auto h-4 w-4 transition-transform ${ open === 1 ? "rotate-180" : "" }` }
                                        />
                                    }
                                >
                                    <ListItem className="p-0 text-dark dark:text-white" selected={ open === 1 }>
                                        <AccordionHeader onClick={ () => handleOpen( 1 ) } className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <PresentationChartBarIcon className="h-5 w-5 text-dark dark:text-white" />
                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal text-dark dark:text-white">
                                                Dashboard
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1 text-dark dark:text-white">
                                        <List className="p-0 text-dark dark:text-white">
                                            <ListItem onClick={ () => handleLink( 'selectedClasses' ) }>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Selected Classes
                                            </ListItem>
                                            <ListItem onClick={ () => handleLink( 'enrolledClasses' ) }>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Enrolled Classes
                                            </ListItem>
                                            <ListItem onClick={ () => handleLink( 'myReviews' ) }>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                My Reviews
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>

                                <hr className="my-2 border-blue-gray-50" />

                                <Link to="/">
                                    <ListItem className="dark:text-white">
                                        <ListItemPrefix>
                                            <HomeIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Home
                                    </ListItem>
                                </Link>
                                <Link to="/instructors">
                                    <ListItem className="dark:text-white">
                                        <ListItemPrefix>
                                            <UserGroupIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Instructors
                                    </ListItem>
                                </Link>
                                <Link to="/classes">
                                    <ListItem className="dark:text-white">
                                        <ListItemPrefix>
                                            <BookOpenIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Classes
                                    </ListItem>
                                </Link>
                            </List>
                        </Card>
                    </motion.div>
                </>
            ) }
        </AnimatePresence>
    );
};

export default Sidebar;