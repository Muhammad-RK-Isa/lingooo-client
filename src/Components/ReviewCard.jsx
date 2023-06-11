import React from 'react';
import { CgProfile } from 'react-icons/cg';

const ReviewCard = () => {
    return (
        <div className='flex flex-col gap-3 max-w-[20rem] mx-auto'>
            <div class="bg-white dark:bg-opacity-80 message-icon max-w-[25rem] rounded-lg p-6 relative text-black">Hellow there Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate porro quaerat iusto totam adipisci! Quibusdam ad nihil, maxime fugit amet consectetur sequi consequuntur, qui tempora.</div>
            <div className='mt-4 ml-4 inline-flex items-center gap-2 text-white'>
                {/* <img src="" alt="" /> */}
                    <CgProfile size={44}/>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Kevin Powell</p>
                    <span>Student</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;