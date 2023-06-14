import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe( `${ import.meta.env.VITE_STRIPE_PUBLIC_KEY }` );
import Checkout from './Checkout';

const Payment = () => {
    return (
        <div>
            <h1 className='text-6xl mt-6 mb-10 w-full text-left'>Payment</h1>
            <Elements stripe={ stripePromise }>
                <Checkout />
            </Elements>
        </div>
    );
};

export default Payment;