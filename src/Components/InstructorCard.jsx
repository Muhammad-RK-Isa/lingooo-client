import useFlags from '../Hooks/useFlags';
import useInstructorClasses from '../Hooks/useInstructorClasses';
import useStudentsCount from '../Hooks/useStudentsCount';
import { Card } from "@material-tailwind/react";

const InstructorCard = ( { instructorData } ) => {

    const { displayName, photoURL, uid, email } = instructorData;
    const { studentsCount } = useStudentsCount( uid );
    const { classes } = useInstructorClasses( uid );
    const { flags } = useFlags( uid );

    return (
        <Card className='max-w-[20rem] grid grid-rows-2 bg-white dark:bg-opacity-40 px-1 py-4 lg:px-4 lg:py-4 overflow-hidden hover:shadow-primary hover:shadow hover:border-secondary hover:border dark:hover:border-white dark:hover:shadow-none duration-300 relative'>
            <div
                className='flex flex-col gap-2 lg:gap-3 absolute top-2 left-2'
            >
                {
                    Array.isArray( flags ) &&
                    flags?.map( flag => {
                        return (
                            <img
                                src={ flag }
                                alt="flag"
                                className='w-6 h-6 lg:w-10 lg:h-10 rounded-full'
                            />
                        );
                    } )
                }
            </div>
            <figure className='grid place-content-center'>
                <img src={ photoURL } alt="instructor-profile" className="w-20 lg:w-24 h-20 lg:h-24 rounded-full object-cover" />
            </figure>
            <div className="row-start-2 flex flex-col items-center justify-center text-center lg:mt-4 dark:text-white">
                <h4 className='font-semibold text-lg lg:text-xl'>{ displayName }</h4>
                <p className='opacity-50 text-xs break-words w-[11.5rem] mb-3'>{ email }</p>
                <div className='flex items-center justify-between opacity-70 text-xs mb-3 mt-4 w-full'>
                    <span>Classes&nbsp;taken:&nbsp;{ classes?.length }</span>
                    <span>Students:&nbsp;{ studentsCount }</span>
                </div>
            </div>
        </Card >
    );
};

export default InstructorCard;