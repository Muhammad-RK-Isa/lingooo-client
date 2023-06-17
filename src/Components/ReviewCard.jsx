import React from 'react';
import { CgProfile } from 'react-icons/cg';

const ReviewCard = ( { reviewData } ) => {
    const { displayName, review, photoURL } = reviewData;
    return (
        <div className='flex flex-col gap-3 max-w-[20rem] mx-auto'>
            <div className="bg-white dark:bg-opacity-80 message-icon max-w-[25rem] rounded-lg p-6 relative text-black">
                {review}
            </div>
            <div className='mt-4 ml-4 inline-flex items-center gap-2 text-white'>
                {
                    photoURL ?
                        <img src={photoURL} alt="" className='rounded-full w-11 h-11' />
                        :
                        <CgProfile size={44} className='dark:opacity-80'/>
                }
                <div className='flex flex-col'>
                    <p className='font-semibold dark:opacity-80'>{ displayName }</p>
                    <span className='opacity-60'>Student</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;