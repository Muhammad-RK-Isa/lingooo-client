import React from 'react';
import ClassCardMin from '../../Components/ClassCardMin';

const ClassesGrid = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4 -mt-12 lg:-mt-20'>
            <ClassCardMin />
            <ClassCardMin />
            <ClassCardMin />
            <ClassCardMin />
            <ClassCardMin />
            <ClassCardMin />
        </div>
    );
};

export default ClassesGrid;