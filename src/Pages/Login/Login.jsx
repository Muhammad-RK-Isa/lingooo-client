import { toast } from 'react-hot-toast';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import {
    Button,
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const { user, signIn, signInWithGoogle } = useAuth();
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const previousLocation = location?.state?.from || '/';

    const [ emailError, setEmailError ] = useState( null );
    const [ passError, setPassError ] = useState( null );
    const [ hidden, setHidden ] = useState( true );

    const onSubmit = async ( { email, password } ) => {
        try {
            await signIn( email, password );
            toast.success( 'You are logged in!' );
            // navigate( previousLocation );
        }
        catch ( error ) {
            if ( error.code.includes( 'email' ) || error.code.includes( 'user' ) ) {
                setError( 'email', {
                    type: error.code,
                } );
            } else {
                setError( 'password', {
                    type: error.code,
                } );
            }
        };
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            toast.success( 'You are logged in!' );
            // navigate( previousLocation );
        } catch ( error ) {
            console.log( error );
        }
    };

    useEffect( () => {
        switch ( errors.email?.type ) {
            case "required":
                setEmailError( "Email cannot be empty" );
                break;
            case "auth/invalid-email":
                setEmailError( "Invalid email address" );
                break;
            case "auth/user-not-found":
                setEmailError( "User not found" );
                break;
            default:
                setEmailError( null );
                break;
        }

        switch ( errors.password?.type ) {
            case "required":
                setPassError( "Password cannot be empty" );
                break;
            case "auth/wrong-password":
                setPassError( "Wrong password" );
                break;
            default:
                setPassError( null );
        }
    }, [ emailError, passError, errors.email, errors.password ] );

    useEffect( () => {
        if ( user ) {
            navigate( previousLocation );
        }
    }, [ user ] );


    return (
        <div className='grid place-content-center w-full h-[70vh]'>
            <Helmet>
                <title>Lingooo | Login</title>
            </Helmet>
            <Card color="transparent" shadow={ false } className='lg:max-w-lg w-full'>
                <Typography variant="h4" className="text-black dark:text-white">
                    Login to continue.
                </Typography>
                <form onSubmit={ handleSubmit( onSubmit ) } className="mt-8 mb-2 w-80">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            size="lg"
                            label="Email"
                            error={ !!errors.email }
                            { ...register( 'email', { required: true } ) }
                            className='dark:border-2 dark:text-white'
                        />
                        <Typography variant="small" color="red" className={ `${ emailError ? 'inline-flex' : 'hidden' } gap-1 font-normal -mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { emailError }
                        </Typography>
                        <div className='relative'>
                            <Input
                                type={ hidden ? 'password' : 'text' }
                                size="lg"
                                label="Password"
                                error={ !!errors.password }
                                className='dark:border-2 dark:text-white'
                                { ...register( 'password', { required: true } ) }
                            />
                            {
                                hidden ?
                                    <AiFillEye size={ 20 } className="absolute top-1/2 right-2 -translate-y-1/2 box-content lg:cursor-pointer dark:text-white" onClick={ () => setHidden( false ) } />
                                    :
                                    <AiFillEyeInvisible size={ 20 } className="absolute top-1/2 right-2 -translate-y-1/2 box-content lg:cursor-pointer dark:text-white" onClick={ () => setHidden( true ) } />
                            }
                        </div>
                        <Typography variant="small" color="red" className={ `${ passError ? 'inline-flex' : 'hidden' } gap-1 font-normal -mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { passError }
                        </Typography>
                    </div>
                    <Button className="bg-secondary mt-6" fullWidth type="submit">
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don't have an account?{ " " }
                        <Link
                            to="/registration"
                            className="font-medium text-primary transition-colors hover:text-blue-700 duration-200"
                        >
                            Register
                        </Link>
                    </Typography>
                </form>
                <div className='relative my-4'>
                    <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-black px-1'>OR</span>
                    <hr className='border-none h-px w-full bg-gray-300 dark:bg-opacity-30' />
                </div>
                <Button color='white' className="inline-flex items-center justify-center gap-2 text-base font-normal mt-6 capitalize border" fullWidth onClick={ handleGoogleLogin }>
                    <FcGoogle size={ 24 } className='box-content' />
                    Continue with Google
                </Button>
            </Card>
        </div>
    );
};

export default Login;