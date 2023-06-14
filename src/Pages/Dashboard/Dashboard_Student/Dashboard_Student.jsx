import React from 'react';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import useAuth from '../../../Hooks/useAuth';
import ClassCard from './../../../Components/ClassCard';

const Dashboard_Student = () => {
    const { user } = useAuth();
    const { classes, refetch, isLoading, isError } = useSelectedClasses( user.uid );
    return (
        <div className="">
            <ClassCard classData={classes}/>
        </div>
    );
};

export default Dashboard_Student;