import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import LazyLoader from "../../Components/LazyLoader";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Navigate } from "react-router-dom";
import { RiDeleteBinLine } from 'react-icons/ri';

const SelectedClassesCard = ( { classData, refetch } ) => {
    const { axiosSecure } = useAxiosSecure();
    const { _id, availableSeats, title, image, price } = classData;

    const handlePayment = () => {
        setSelectedClass( classData );
        return <Navigate to="/dashboard/payment" replace={ true } />;
    };

    const handleDeletion = () => {
        Swal.fire( {
            title: 'Are you sure you want to delete this class?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            customClass: {
                confirmButton: '!bg-red-500 !text-white',
                cancelButton: '!bg-white !text-black'
            }
        } ).then( async ( result ) => {
            if ( result.isConfirmed ) {
                try {
                    const response = await axiosSecure.delete( `/student/selected_classes/${ _id }` );
                    if ( response.status === 200 ) {
                        toast.success( 'Class deleted successfully' );
                        refetch();
                    }
                }
                catch ( error ) {
                    toast.error( error.response.data.message );
                }
            };
        } );
    };

    return (
        <>
            {
                classData ?
                    <Card className={ `${ availableSeats < 1 && 'bg-opacity-60 bg-red-50 border-2 border-red-400' } max-w-[24rem] overflow-hidden rounded-lg dark:bg-opacity-20 z-auto shadow-none` }>
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
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className={ `${ availableSeats > 0 ? 'inline-flex' : 'hidden' } items-center text-xs lg:text-base mb-2 font-normal dark:text-white dark:text-opacity-80` }
                            >
                                <TiTick />{ availableSeats < 100 && 'Only' }&nbsp;<span className="font-semibold">{ availableSeats }</span>&nbsp;seats available
                            </Typography>

                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className={ `w-full text-xs lg:text-base mt-auto mb-2 font-normal dark:text-white dark:text-opacity-80` }
                            >
                                <div className="w-full p-2 lg:p-3 text-center text-xs lg:text-base cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        Payable ammount: ${ availableSeats > 0 ? price : 0 }
                                    </span>
                                </div>
                            </Typography>

                        </CardBody>
                        <CardFooter className="flex items-center justify-between gap-2 py-4 px-2 pt-0 mt-auto mx-2">
                            {
                                availableSeats > 0 ?
                                    <>
                                        <Button
                                            color="white"
                                            onClick={ handlePayment }
                                            className="w-full border-2 dark:border-none px-0 flex-1 shadow-none dark:bg-opacity-90"
                                        >
                                            Pay
                                        </Button>
                                        <Button
                                            color="red"
                                            onClick={ handleDeletion }
                                            className="w-max px-3 shadow-none"
                                        >
                                            <RiDeleteBinLine size={ 18 } className="box-content" />
                                        </Button>
                                    </>
                                    :
                                    <Button
                                        color="gray"
                                        disabled={ true }
                                        className="w-full shadow-none"
                                    >
                                        No seats available
                                    </Button>
                            }
                        </CardFooter>
                    </Card>
                    :
                    <LazyLoader />
            }
        </>
    );
};

export default SelectedClassesCard;