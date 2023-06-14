// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '../../src';

import '../styles/common.css';

const Checkout = () => {

    const [ cardError, setCardError ] = useState( null );
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async ( event ) => {
        event.preventDefault();

        if ( !stripe || !elements ) {
            return;
        }

        const card = elements.getElement( CardElement );
        if ( card == null ) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod( {
            type: 'card',
            card,
        } );

        if ( error ) {
            setCardError( error.message );
            console.log( '[error]', error );
        } else {
            setCardError( null );
            console.log( '[PaymentMethod]', paymentMethod );
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <CardElement
                options={ {
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                } }
            />
            <button type="submit" disabled={ !stripe }>
                Pay
            </button>
        </form>
    );
};

export default Checkout;