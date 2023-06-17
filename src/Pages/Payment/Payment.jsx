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

    useEffect( async () => {
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
    }, [ _id ] );

    if ( userRole ) {
        if ( role === 'student' ) {
            return (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                    {
                        classData ?
                            <Card className="w-full max-w-[22rem] lg:max-w-[50rem] mx-auto p-6 lg:p-8">
                                <h1 className='text-2xl lg:text-4xl mt-6 mb-10 w-full text-left'>Payment</h1>
                                <Elements stripe={ stripePromise }>
                                    <Checkout classData={ classData } />
                                </Elements>
                            </Card>
                            :
                            <p className='text-4xl text-center font-bold'>You have already enrolled in this class</p>
                    }
                </div>
            );
        } else {
            return <Navigate to={ `/dashboard/${ role }` } />;
        }
    };
};

export default Payment;