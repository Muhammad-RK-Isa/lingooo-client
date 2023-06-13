import React from 'react';
import ClassCardMin from '../../Components/ClassCardMin';
import useClasses from '../../Hooks/useClasses';

const ClassesGrid = () => {
    const { classes } = useClasses( 6 );

    return (
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4 -mt-12 lg:-mt-20'>
            {
                classes.length > 0 &&
                classes.map( ( classData, idx ) => {
                    return (
                        <div
                            key={ classData._id }
                            className={ `${ idx == 0 && 'lg:row-span-2 lg:-mb-8 lg:flex flex-col justify-end' } ${ idx == 5 && 'lg:row-span-2 lg:-mb-8 lg:flex lg:flex-col  lg:justify-end' } ${ idx == 2 && 'lg:-mt-8' } ${ idx == 3 && 'lg:-mt-8' }` }
                        >
                            <ClassCardMin data={ classData } />
                        </div>
                    );
                } )
            }
        </div>
    );
};

export default ClassesGrid;