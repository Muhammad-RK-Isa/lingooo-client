import React, { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-hot-toast';
import { DashboardContext } from '../../Layouts/Dashboard/Dashboard';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@material-tailwind/react';

const Checkout = ( { classData } ) => {
    const { title } = classData;
    const { selectedClass, setSelectedClass } = useContext( DashboardContext );
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
            toast.error( error.message );
            setCardError( error.message );
            console.log( '[error]', error );
        } else {
            setCardError( null );
            console.log( '[PaymentMethod]', paymentMethod );
        }
    };
    return (
        <form onSubmit={ handleSubmit } className='flex flex-col gap-8'>
            <h3>{ title }</h3>
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

            <Button type="submit" disabled={ !stripe }>
                Pay
            </Button>
        </form>
    );

};

export default Checkout;