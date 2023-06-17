import { useEffect } from "react";
import useInstructorClasses from "../../Hooks/useInstructorClasses";
import SelectedClassesCard from './../Dashboard_Student/SelectedClassesCard';

const Dashboard_Instructor = () => {
    const { classes } = useInstructorClasses();
    useEffect( () => {
        classes;
    }, [ classes ] );

    return (
        <div>
            <h1 className='text-2xl lg:text-4xl font-bold mb-4 lg:mb-6'>My Classes</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6'>
                {
                    classes?.length > 0 &&
                    classes?.map( classData => <SelectedClassesCard classData={ classData } /> )
                }
            </div>
        </div>
    );
};

export default Dashboard_Instructor;