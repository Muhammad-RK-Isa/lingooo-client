import useClasses from '../../Hooks/useClasses';
import ClassCard from '../../Components/ClassCard';

const Classes = () => {

    const { classes } = useClasses();

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 max-w-screen-xl mx-2 lg:mx-auto mt-10'>
            {
                classes?.map( classData => <ClassCard key={ classData._id } classData={ classData }></ClassCard> )
            }
        </div>
    );
};

export default Classes;