import React from 'react';
import ClassCard from '../../Components/ClasseCard';

const ClassesGrid = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4 -mt-8 lg:-mt-16'>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
            <ClassCard/>
        </div>
    );
};

export default ClassesGrid;