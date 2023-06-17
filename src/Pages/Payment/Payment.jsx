import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { DashboardContext } from '../../Layouts/Dashboard/Dashboard';

const stripePromise = loadStripe( `${ import.meta.env.VITE_STRIPE_PUBLIC_KEY }` );
import Checkout from './Checkout';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const params = useParams();
    const { _id } = params;
    const { selectedClass, setSelectedClass } = useContext( DashboardContext );
    return (
        <div>
            <h1 className='text-6xl mt-6 mb-10 w-full text-left'>Payment</h1>
            <Elements stripe={ stripePromise }>
                <Checkout _id={ _id } />
            </Elements>
        </div>
    );
};

export default Payment;