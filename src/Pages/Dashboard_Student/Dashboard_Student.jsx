import React from 'react';
import useSelectedClasses from '../../Hooks/useSelectedClasses';
import useAuth from '../../Hooks/useAuth';
import SelectedClassesCard from './SelectedClassesCard';
import EnrolledClassesCard from './EnrolledClassesCard';
import useEnrolledClasses from '../../Hooks/useEnrolledClasses';

const Dashboard_Student = () => {
    const { user } = useAuth();
    const { classes, refetch, isLoading, isError } = useSelectedClasses( user.uid );
    const { enrolledClasses } = useEnrolledClasses( user.uid );
    return (
        <div className='max-w-screen-xl mx-2 lg:mx-auto mt-4'>
            <h1 className='text-2xl lg:text-4xl font-bold mb-4 lg:mb-6'>Pending payment</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6'>
                {
                    classes.length > 0 &&
                    classes?.map( classData => <SelectedClassesCard classData={ classData } /> )
                }
            </div>

            <h1 className='text-2xl lg:text-4xl font-bold mt-8 lg:mt-10 mb-4 lg:mb-6'>Enrolled classes</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 mb-8'>
                {
                    enrolledClasses.length > 0 ?
                        enrolledClasses?.map( classData => <EnrolledClassesCard classData={ classData } /> )
                        :
                        <p className='col-span-2 lg:col-span-3'>You have not enrolled in any classes yet.</p>
                }
            </div>
        </div>
    );
};

export default Dashboard_Student;