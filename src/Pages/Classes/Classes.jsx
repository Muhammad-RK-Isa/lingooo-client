import useClasses from '../../Hooks/useClasses';
import ClassCard from '../../Components/ClassCard';
import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const Classes = () => {

    const sortOpts = [
        'Sort by name A-Z',
        'Sort by name Z-A',
        'Sort by price high to low',
        'Sort by price low to high',
        'Sort by popularity ascending',
        'Sort by popularity descending',
        'Sort by availability ascending',
        'Sort by availability descending'
    ];

    const [ selected, setSelected ] = useState( null );
    const { classes, refetch } = useClasses( undefined, { filter: selected } );

    useEffect(() => {
        refetch();
    }, [selected])
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-4 w-full lg:max-w-screen-xl px-2 lg:mx-auto mt-4'>
                <h1 className='text-2xl font-semibold text-left w-full px-2'>Select your desired class.</h1>
                <Listbox value={ selected } onChange={ setSelected } className="w-full lg:min-w-[20rem] mx-auto px-4 z-10">
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-dark dark:text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{ selected || 'Filter Classes' }</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={ Fragment }
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-max overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                { sortOpts.map( ( sortOpt, idx ) => (
                                    <Listbox.Option
                                        key={ idx }
                                        className={ ( { active } ) =>
                                            `relative cursor-default select-none py-2 px-10 ${ active ? 'bg-primary bg-opacity-20 text-primary' : 'text-gray-900'
                                            }`
                                        }
                                        value={ sortOpt }
                                    >
                                        { ( { selected } ) => (
                                            <>
                                                <span
                                                    className={ `block truncate dark:text-white dark:opacity-50 ${ selected ? 'font-medium' : 'font-normal'
                                                        }` }
                                                >
                                                    { sortOpt }
                                                </span>
                                                { selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null }
                                            </>
                                        ) }
                                    </Listbox.Option>
                                ) ) }
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 max-w-screen-xl mx-2 lg:mx-auto mt-6'>
                {
                    classes?.map( classData => <ClassCard key={ classData._id } classData={ classData }></ClassCard> )
                }
            </div>
        </>
    );
};

export default Classes;         