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
import LazyLoader from './LazyLoader';
import useRole from "../Hooks/useRole";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ClassCard = ( { classData } ) => {

    const { availableSeats, title, image, enrolled, price } = classData;
    const { role } = useRole();
    const enrollable = ( role === 'student' && availableSeats > 0 );
    const handleEnrollment = () => {
        if ( enrollable ) {
            try {
                Swal.fire( {
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Enroll',
                    customClass: {
                        confirmButton: '!bg-gradient-tr !from-primary !to-secondary'
                    }
                } ).then( ( result ) => {
                    if ( result.isConfirmed ) {
                        Swal.fire( 'Saved!', '', 'success' );
                    } else if ( result.isDenied ) {
                        Swal.fire( 'Changes are not saved', '', 'info' );
                    }
                } );
            } catch ( error ) {
                toast.error( 'Something went wrong!' );
            }
        } else {
            toast.error( 'Something went wrong!' );
        }
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
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="inline-flex items-center text-sm lg:text-lg mb-2 font-normal dark:text-white dark:text-opacity-80"
                            >
                                <TiTick />
                                <span className="font-semibold">{ enrolled }+</span>&nbsp; Enrollments
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
                                className={ `inline-flex items-center justify-between text-xs lg:text-base mt-auto mb-2 font-normal dark:text-white dark:text-opacity-80` }
                            >
                                Enroll now only at <BsArrowRight size={ 24 } className="box-content hidden lg:block -ml-4" />&nbsp;
                                <div className="w-max p-2 lg:p-3 text-xs lg:text-base cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        ${ price }
                                    </span>
                                </div>
                            </Typography>

                        </CardBody>
                        <CardFooter className="flex items-center justify-between p-4 pt-0 mt-auto">
                            <Button
                                disabled={ !!enrollable }
                                className={ `${ availableSeats < 1 ? 'bg-gray-500' : 'bg-gradient-to-tl' } w-full from-secondary to-primary` }
                                onClick={ handleEnrollment }
                            >
                                {
                                    availableSeats < 1 ?
                                        'No seats available'
                                        :
                                        'Enroll'
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                    :
                    <LazyLoader />
            }
        </>
    );
};

export default ClassCard;