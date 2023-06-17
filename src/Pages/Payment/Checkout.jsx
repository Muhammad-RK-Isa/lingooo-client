import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@material-tailwind/react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = ( { classData } ) => {
    const { user } = useAuth();
    const [ cardError, setCardError ] = useState( null );
    const [ clientSecret, setClientSecret ] = useState( null );
    const stripe = useStripe();
    const elements = useElements();
    const { axiosSecure } = useAxiosSecure();
    const navigate = useNavigate();

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
            return;
        } else {
            setCardError( null );
            // console.log( '[PaymentMethod]', paymentMethod );
        }

        Swal.fire( {
            title: 'Confirm payment?',
            text: 'You will be charged $' + classData.price,
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Proceed',
            customClass: {
                confirmButton: '!bg-primary !text-white',
                cancelButton: '!bg-white !text-red-400',
            }
        } ).then( ( result ) => {
            if ( result.isConfirmed ) {
                (
                    async () => {
                        try {
                            const paymentIntent = await stripe.confirmCardPayment(
                                clientSecret,
                                {
                                    payment_method: {
                                        card,
                                        billing_details: {
                                            name: user?.displayName,
                                            email: user?.email,
                                        },
                                    },
                                },
                            );

                            const paymentDetails = {
                                uid: user.uid,
                                classID: classData._id,
                                trxId: paymentIntent.paymentIntent.id,
                                status: paymentIntent.paymentIntent.status,
                                amount: paymentIntent.paymentIntent.amount,
                            };

                            console.log( paymentDetails );

                            try {
                                const response = await axiosSecure.post( '/payments', { paymentDetails } );
                                console.log( response );
                            } catch ( error ) {
                                console.log( error );
                            }

                            Swal.fire( {
                                title: 'Payment successful!',
                                icon: 'success',
                                showConfirmButton: true,
                                // confirmButtonText: 'Ok',
                                customClass: {
                                    confirmButton: '!bg-primary !text-white',
                                },
                            } ).then( ( result ) => {
                                if ( result.isConfirmed ) {
                                    navigate( '/dashboard' );
                                } else {
                                    navigate( '/dashboard' );
                                }
                            } );
                        } catch ( error ) {
                            console.log( error );
                        }
                    }
                )();
            }
        } );
    };


    useEffect( () => {
        (
            async () => {
                const response = await axiosSecure.post( '/create-payment-intent', { price: classData.price } );
                setClientSecret( response.data.clientSecret );
            }
        )();
        try {

        } catch ( error ) {

        }
    }, [ classData, axiosSecure ] );

    return (
        <form onSubmit={ handleSubmit } className='flex flex-col gap-8'>
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

            <Button type="submit" disabled={ !stripe || !clientSecret }>
                Pay
            </Button>
        </form>
    );

};

export default Checkout;