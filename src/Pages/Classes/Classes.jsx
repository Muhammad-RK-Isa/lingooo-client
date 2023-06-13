import React, { useEffect } from 'react';
import useClasses from '../../Hooks/useClasses';
import useAuth from './../../Hooks/useAuth';
import ClassCard from '../../Components/ClassCard';

const Classes = () => {

    const { classes, isLoading } = useClasses();

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                classes?.map( classData => <ClassCard key={ classData._id } classData={ classData }></ClassCard> )
            }
        </div>
    );
};

export default Classes;