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

const ClassCard = ( { classData } ) => {

    const { availableSeats, title, image, enrolled, price } = classData;
    const handleEnrollment = () => {
        console.log( 'enrolled' );
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
                                Enroll now only at <BsArrowRight size={24} className="box-content hidden lg:block -ml-4"/>&nbsp;
                                <div className="w-max p-2 lg:p-3 text-xs lg:text-base cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        ${ price }
                                    </span>
                                </div>
                            </Typography>

                        </CardBody>
                        <CardFooter className="flex items-center justify-between p-4 pt-0 mt-auto">
                            <Button
                                disabled={ availableSeats < 1 }
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