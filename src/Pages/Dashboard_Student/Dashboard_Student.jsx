import React from 'react';
import useSelectedClasses from '../../Hooks/useSelectedClasses';
import useAuth from '../../Hooks/useAuth';
import SelectedClassesCard from './SelectedClassesCard';
import EnrolledClassesCard from './EnrolledClassesCard';
import useEnrolledClasses from '../../Hooks/useEnrolledClasses';
import { MdOutlineInventory, MdOutlineRateReview } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';

const Dashboard_Student = () => {
    const { user } = useAuth();
    const { classes } = useSelectedClasses();
    const { enrolledClasses } = useEnrolledClasses();
    return (
        <div className='max-w-screen-xl mx-2 lg:mx-auto mt-6 lg:mt-8'>

            {/* Dashboard Cards */}
            <div className='grid lg:grid-cols-3 gap-4 lg:gap-6'>
                <div className='bg-white dark:bg-dark text-dark dark:text-white px-4 py-6 rounded-lg'>
                    <div className='inline-flex items-center'>
                        <MdOutlineInventory className='box-content p-2 inline w-8 h-8 lg:w-10 lg:h-10' />
                        <h1 className='p-2 pb-0 text-2xl font-bold'>Enrolled Classes</h1>
                    </div>
                    <h2 className='p-2 pb-0 text-4xl font-bold'>{ enrolledClasses.length }</h2>
                </div>
                <div className='bg-white dark:bg-dark text-dark dark:text-white px-4 py-6 rounded-lg'>
                    <div className='inline-flex items-center'>
                        <FiShoppingBag className='box-content p-2 inline w-8 h-8 lg:w-10 lg:h-10' />
                        <h1 className='p-2 pb-0 text-2xl font-bold'>Selected Classes</h1>
                    </div>
                    <h2 className='p-2 pb-0 text-4xl font-bold'>{ classes.length }</h2>
                </div>
                <div className='bg-white dark:bg-dark text-dark dark:text-white px-4 py-6 rounded-lg'>
                    <div className='inline-flex items-center'>
                        <MdOutlineRateReview className='box-content p-2 inline w-8 h-8 lg:w-10 lg:h-10' />
                        <h1 className='p-2 pb-0 text-2xl font-bold'>Total Reviews</h1>
                    </div>
                    <h2 className='p-2 pb-0 text-4xl font-bold'>{ enrolledClasses.length }</h2>
                </div>
            </div>

            <h1 className='inline-flex items-end gap-2 text-2xl lg:text-4xl font-semibold mt-8 lg:mt-10 mb-4 lg:mb-6'>Selected classes <span className='opacity-50 text-lg'>(Pending payment)</span></h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4'>
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