import React, { useEffect } from 'react';
import useClasses from '../../Hooks/useClasses';
import ClassCard from '../../Components/ClassCard';

const Classes = () => {

    const { classes, isLoading } = useClasses();

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 max-w-screen-2xl mx-2 lg:mx-auto mt-10'>
            {
                classes?.map( classData => <ClassCard key={ classData._id } classData={ classData }></ClassCard> )
            }
        </div>
    );
};

export default Classes;