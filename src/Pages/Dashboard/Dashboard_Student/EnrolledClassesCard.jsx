import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";
import LazyLoader from "../../../Components/LazyLoader";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useRole from '../../../Hooks/useRole';

const EnrolledClassesCard = ( { classData } ) => {
    const { axiosSecure } = useAxiosSecure();
    const { user } = useAuth();
    const [ enrollable, setEnrollable ] = useState( true );
    const { _id, availableSeats, title, image, enrolled, price } = classData;
    const { role } = useRole();

    const handlePayment = () => {

    };

    return (
        <>
            {
                classData ?
                    <Card className={ `${ availableSeats < 1 && 'bg-opacity-60 bg-red-50 border-2 border-red-400' } max-w-[24rem] overflow-hidden rounded-lg dark:bg-opacity-20` }>
                        <CardHeader
                            floated={ false }
                            shadow={ false }
                            color="transparent"
                            className="m-0 rounded-none relative"
                        >
                            <img
                                src={ image }
                                alt="class-thumbnail-image"
                            />
                            <div className="hidden dark:block to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-black/20 via-transparent to-black/40 " />
                        </CardHeader>
                        <CardBody className="p-4 pt-2 h-full grid flex-1">
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="text-base lg:text-2xl mb-2 dark:text-white dark:text-opacity-80"
                            >
                                { title }
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex items-center justify-between gap-2 py-4 px-2 pt-0 mt-auto">
                            <Button
                                color="white"
                                onClick={ handlePayment }
                                className="w-full border-2 dark:border-none px-0"
                            >
                                Write a review
                            </Button>
                        </CardFooter>
                    </Card>
                    :
                    <LazyLoader />
            }
        </>
    );
};

export default EnrolledClassesCard;