import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import Checkout from './Checkout';
import { Navigate, useParams } from 'react-router-dom';
import useRole from '../../Hooks/useRole';
import { Card } from '@material-tailwind/react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const stripePromise = loadStripe( `${ import.meta.env.VITE_STRIPE_PUBLIC_KEY }` );

const Payment = () => {
    const params = useParams();
    const { _id } = params;
    const [ userRole, setUserRole ] = useState( undefined );
    const [ existingClass, setExistingClass ] = useState( false );
    const [ classData, setClassData ] = useState( null );
    const { axiosSecure } = useAxiosSecure();

    const { role } = useRole();
    useEffect( () => {
        if ( role ) {
            setUserRole( role );
        }
    }, [ role ] );
    useEffect( () => {
        ( async () => {
            try {
                const response = await axiosSecure.get( `/users/students/enrolledClasses/check_existing/${ _id }` );
                if ( response.status === 200 ) {
                    setClassData( response.data );
                    setExistingClass( false );
                }
                if ( response.status === 409 ) {
                    setExistingClass( true );
                }
            } catch ( error ) {
                console.log( error );
            }
        } )();
    }, [ _id ] );


    if ( userRole ) {
        if ( role === 'student' ) {
            return (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                    {
                        classData ?
                            <Card className="w-full max-w-[22rem] lg:max-w-[30rem] mx-auto p-6 lg:p-8 dark:bg-opacity-20 dark:text-white">
                                <h1 className='text-2xl lg:text-4xl mt-6 w-full text-left'>Payment Details</h1>

                                <hr className='border-none w-full h-px bg-black dark:bg-white opacity-10 mt-2 mb-4' />

                                <div className="grid lg:grid-cols-2 gap-4 mb-10">
                                    <div>
                                        <h3 className='text-xl lg:text-2xl font-semibold'>{ classData.title }</h3>
                                        <p >Language <span className="font-semibold">{ classData.language }</span></p>
                                        <p>Instructor <span className="font-semibold">{ classData.instructor.name }</span></p>
                                        <p>Payable ammount <span className="font-semibold">${ classData.price }</span></p>
                                    </div>
                                    <img src={ classData.image } alt="" />
                                </div>
                                <Elements stripe={ stripePromise }>
                                    <Checkout classData={ classData } />
                                </Elements>
                            </Card>
                            :
                            <p className='text-4xl text-center font-bold'>You have already enrolled in this class.</p>
                    }
                </div>
            );
        } else {
            return <Navigate to={ `/dashboard/${ role }` } />;
        }
    };
};

export default Payment;