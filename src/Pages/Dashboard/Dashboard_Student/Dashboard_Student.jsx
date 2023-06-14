import React from 'react';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import useAuth from '../../../Hooks/useAuth';

const Dashboard_Student = () => {
    const { user } = useAuth();
    const { classes, refetch, isLoading, isError } = useSelectedClasses( user.uid );
    console.log(classes);
    return (
        <div className="">
            
        </div>
    );
};

export default Dashboard_Student;