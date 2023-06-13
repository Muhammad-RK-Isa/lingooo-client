import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
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
                    <Card className="max-w-[24rem] overflow-hidden rounded-lg dark:bg-opacity-20">
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
                                className="text-sm lg:text-lg mb-2 font-normal dark:text-white dark:text-opacity-80"
                            >
                                <span className="font-semibold">{ enrolled }+</span> Enrollments
                            </Typography>
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="text-xs lg:text-base mb-2 font-normal dark:text-white dark:text-opacity-80"
                            >
                                { availableSeats < 100 && 'Only ' }<span className="font-semibold">{ availableSeats }</span> seats available
                            </Typography>
                            <div className="w-full mt-auto px-1 lg:px-4 text-center text-xs lg:text-base cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Enroll now only at ${ price }
                                </span>
                            </div>
                        </CardBody>
                        <CardFooter className="flex items-center justify-between p-4 pt-0 mt-auto">
                            <Button
                                color="teal"
                                className="w-full bg-gradient-to-tl from-secondary to-primary"
                                onClick={ handleEnrollment }
                            >
                                Enroll
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