import { useContext, useEffect, useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardContext } from "./Dashboard";

const Sidebar = () => {
    const { sideBarOpen, setSideBarOpen, selectedContents, setSelectedContents } = useContext( DashboardContext );
    const [ open, setOpen ] = useState( 0 );
    const handleOpen = ( value ) => {
        setOpen( open === value ? 0 : value );
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
                            <List>
                                <Accordion
                                    open={ open === 1 }
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={ 2.5 }
                                            className={ `mx-auto h-4 w-4 transition-transform ${ open === 1 ? "rotate-180" : "" }` }
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={ open === 1 }>
                                        <AccordionHeader onClick={ () => handleOpen( 1 ) } className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <PresentationChartBarIcon className="h-5 w-5" />
                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                Dashboard
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Selected Classes
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Enrolled Classes
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                My Reviews
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <Accordion
                                    open={ open === 2 }
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={ 2.5 }
                                            className={ `mx-auto h-4 w-4 transition-transform ${ open === 2 ? "rotate-180" : "" }` }
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={ open === 2 }>
                                        <AccordionHeader onClick={ () => handleOpen( 2 ) } className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <ShoppingBagIcon className="h-5 w-5" />
                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                E-Commerce
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Orders
                                            </ListItem>
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={ 3 } className="h-3 w-5" />
                                                </ListItemPrefix>
                                                Products
                                            </ListItem>
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                                <hr className="my-2 border-blue-gray-50" />
                                <ListItem>
                                    <ListItemPrefix>
                                        <InboxIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Inbox
                                    <ListItemSuffix>
                                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                                    </ListItemSuffix>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <UserCircleIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <Cog6ToothIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Settings
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log Out
                                </ListItem>
                            </List>
                        </Card>
                    </motion.div>
                </>
            ) }
        </AnimatePresence>
    );
};

export default Sidebar;