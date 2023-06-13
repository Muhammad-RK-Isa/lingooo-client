import {
    Card,
    CardBody,
} from "@material-tailwind/react";
import useStudentsCount from "../Hooks/useStudentsCount";

const InstructorCardMin = ( { instructorData } ) => {
    const { displayName, photoURL, uid } = instructorData;
    const { studentsCount } = useStudentsCount( uid );

    return (
        <Card className="w-full lg:max-w-[20rem] shadow-lg drop-shadow-sm hover:shadow-primary hover:shadow hover:border-secondary hover:border dark:hover:border-white dark:hover:shadow-none duration-300 rounded-lg overflow-hidden dark:bg-opacity-40 dark:text-white">
            <img
                src={ photoURL }
                alt="instructor"
                className="rounded-full w-14 h-14 lg:w-20 lg:h-20 mx-auto mt-4 lg:mt-6"
            />
            <CardBody className="m-0 px-1 py-5 lg:p-4 z-10 -mt-2 text-center">
                <p className="lg:text-lg text-sm">{ displayName }</p>
                <p className="lg:text-lg text-xs mb-2 opacity-50">Instructor | Lingooo</p>
                <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xs lg:text-base">
                    {studentsCount} students
                </p>
            </CardBody>
        </Card>
    );
};

export default InstructorCardMin;