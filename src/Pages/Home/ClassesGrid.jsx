import React from 'react';
import ClassCardMin from '../../Components/ClassCardMin';

const ClassesGrid = () => {
    const nums = [ 1, 2, 3, 4, 5, 6 ];
    return (
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4 -mt-12 lg:-mt-20'>
            {
                nums.map( num => {
                    return (
                        <div
                            key={ num }
                            className={ `${ num == 1 && 'lg:row-span-2 lg:-mb-8 lg:flex flex-col justify-end' } ${ num == 6 && 'lg:row-span-2 lg:-mb-8 lg:flex lg:flex-col lg:justify-end' } ${ num == 3 && 'lg:-mt-8' } ${ num == 4 && 'lg:-mt-8' }`
                        }>
                            <ClassCardMin />
                        </div>
                    );
                } )
            }
        </div>
    );
};

export default ClassesGrid;