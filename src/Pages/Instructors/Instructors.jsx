import InstructorCard from '../../Components/InstructorCard';
import useInstructors from '../../Hooks/useInstructors';
import scrollToTopOnRender from './../../Utils/scrollToTopOnRender';

const Instructors = () => {

    const { instructors } = useInstructors();
    scrollToTopOnRender();

    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-1 lg:gap-4 max-w-screen-2xl mx-2 lg:mx-auto mt-10'>
            {
                instructors?.map( instructorData => <InstructorCard key={ instructorData._id } instructorData={ instructorData }></InstructorCard> )
            }
        </div>
    );
};

export default Instructors;