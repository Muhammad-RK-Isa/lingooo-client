import {
    Card,
    CardBody,
} from "@material-tailwind/react";
import useStudentsCount from "../Hooks/useStudentsCount";

const InstructorCardMin = ( { instructorData } ) => {
    const { displayName, photoURL, uid } = instructorData;
    const { studentsCount } = useStudentsCount( uid );

    return (
        <Card className="w-full lg:max-w-[20rem] shadow-lg drop-shadow-sm hover:shadow-primary hover:shadow hover:border-secondary hover:border duration-300 rounded-lg overflow-hidden dark:bg-opacity-90 dark:text-black">
            <img
                src={ photoURL }
                alt="instructor"
                className="rounded-full w-14 h-14 lg:w-20 lg:h-20 mx-auto mt-4 lg:mt-6"
            />
            <CardBody className="m-0 p-4 z-10 -mt-2 text-center">
                <p className="lg:text-lg text-xs">{ displayName }</p>
                <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {studentsCount} students
                </p>
            </CardBody>
        </Card>
    );
};

export default InstructorCardMin;