import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    BookOpenIcon,
    HomeIcon
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { MainContext } from "../../Layouts/Main/Main";
import { Transition } from "@headlessui/react";
import logo from '../../assets/svg/logo-gradient.svg';
import { Link } from 'react-router-dom';
import useRole from "../../Hooks/useRole";

const Sidepanel_Main = () => {
    const { role } = useRole();
    const { isOpen, setIsOpen } = useContext( MainContext );
    const closeDrawer = () => setIsOpen( false );
    return (
        <Transition
            show={ isOpen }
            enter="transition-opacity duration-100"
            enterFrom="bg-opacity-0"
            enterTo="bg-opacity-20"
            leave="transition-opacity duration-500"
            leaveFrom="bg-opacity-20"
            leaveTo="bg-opacity-0"
            className={ `h-[130vh] fixed top-0 left-0  bg-black w-full backdrop-blur-sm z-50` }
        >
            <Drawer open={ isOpen } onClose={ closeDrawer } className="dark:bg-white dark:bg-opacity-20 dark:backdrop-blur-lg">
                <div className="mb-2 flex items-center justify-between p-4">
                    <img src={ logo } alt="" className="h-8" />
                    <IconButton variant="text" color="blue-gray" onClick={ closeDrawer } >
                        <XMarkIcon strokeWidth={ 2 } className="h-5 w-5 dark:text-white" />
                    </IconButton>
                </div>
                <List className="dark:bg-transparent dark:text-black">
                    <Link to="/" onClick={ closeDrawer }>
                        <ListItem className="dark:text-white">
                            <ListItemPrefix>
                                <HomeIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Home
                        </ListItem>
                    </Link>
                    <Link to="/instructors" onClick={ closeDrawer }>
                        <ListItem className="dark:text-white">
                            <ListItemPrefix>
                                <UserGroupIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Instructors
                        </ListItem>
                    </Link>
                    <Link to="/classes" onClick={ closeDrawer }>
                        <ListItem className="dark:text-white">
                            <ListItemPrefix>
                                <BookOpenIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Classes
                        </ListItem>
                    </Link>
                    <Link to={`dashboard/${role?.role}`} onClick={ closeDrawer }>
                        <ListItem className="dark:text-white">
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </Transition>
    );
};

export default Sidepanel_Main;
