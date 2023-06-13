import useStudentsCount from '../Hooks/useStudentsCount';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

const InstructorCard = ( { instructorData } ) => {

    const { displayName, photoURL, uid } = instructorData;
    const { studentsCount } = useStudentsCount( uid );

    return (
        <Card className="max-w-[18rem]">
            <CardHeader floated={ false } className="max-h-48">
                <img
                    src={ photoURL }
                    alt="instructor-profile-picture"
                    className='object-center object-cover w-full h-full'
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    { displayName }
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                    Instructor | Lingooo
                </Typography>
                <Typography
                    as="h5"
                    variant="lead"
                    color="blue"
                    textGradient
                >
                    <i className="fab fa-gmail" />
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-0">
                <Tooltip content="Follow">
                    <Typography
                        as="h5"
                        variant="lead"
                        color="black"
                    >
                        Students: { studentsCount }
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    );
};

export default InstructorCard;