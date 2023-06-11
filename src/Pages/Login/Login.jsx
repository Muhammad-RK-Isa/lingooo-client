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
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signIn, signInWithGoogle } = useAuth();
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const navigate = useNavigate();
    const previousLocation = window.location?.state?.pathname || '/';

    const [ emailError, setEmailError ] = useState( null );
    const [ passError, setPassError ] = useState( null );

    const onSubmit = async ( { email, password } ) => {
        try {
            await signIn( email, password );
            toast.success( 'Logged in successfully' );
            navigate( previousLocation, { replace: true } );
        } catch ( error ) {
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

    return (
        <>
            <Helmet>
                <title>Lingooo | Login</title>
            </Helmet>
            <Card color="transparent" shadow={ false } className='max-w-sm w-full'>
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Login to continue.
                </Typography>
                <form onSubmit={ handleSubmit( onSubmit ) } className="mt-8 mb-2 w-full">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            size="lg"
                            label="Email"
                            error={ !!errors.email }
                            { ...register( 'email', { required: true } ) }
                        />
                        <Typography variant="small" color="red" className={ `${ emailError ? 'inline-flex' : 'hidden' } gap-1 font-normal mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { emailError }
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            label="Password"
                            error={ !!errors.password }
                            { ...register( 'password', { required: true } ) } />
                        <Typography variant="small" color="red" className={ `${ passError ? 'inline-flex' : 'hidden' } gap-1 font-normal mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { passError }
                        </Typography>
                    </div>
                    <Button className="bg-secondary mt-6" fullWidth type="submit">
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don't have an account?{ " " }
                        <a
                            href="#"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Register
                        </a>
                    </Typography>
                </form>
                <div className='relative my-4'>
                    <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-1'>OR</span>
                    <hr className='border-none h-px w-full bg-gray-300' />
                </div>
                <Button color='white' className="inline-flex items-center justify-center gap-2 text-base mt-6 uppercase border" fullWidth onClick={ signInWithGoogle }>
                    <FcGoogle size={ 24 } className='box-content' />
                    Sign in with Google
                </Button>
            </Card>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, laboriosam eum amet deleniti impedit nemo aliquam voluptatibus eligendi exercitationem nulla iusto, voluptas possimus explicabo, modi ducimus eaque illo! Itaque ducimus perspiciatis repellat ut est voluptatibus eligendi facilis fugit tempore odio excepturi, omnis veniam necessitatibus voluptates dignissimos ab quasi provident, minima, earum eaque? Molestias aut corrupti ex id nostrum deserunt quas nisi eligendi quo fuga obcaecati, temporibus magnam deleniti vel odio excepturi amet quod doloribus quam quis? Velit beatae a sapiente laboriosam doloribus nisi nam iure deleniti nulla quibusdam ipsum perspiciatis aspernatur dicta repellendus eaque tenetur odio deserunt at, incidunt, recusandae doloremque. Fugit possimus saepe atque maxime deleniti nihil optio vel facilis deserunt ipsa, ea, corrupti consequatur, quibusdam provident quo. Maxime quidem velit voluptas doloribus aut alias, cupiditate doloremque! Laboriosam natus cupiditate nobis ipsa nisi similique optio officia ratione, porro dolorum neque sit exercitationem veritatis voluptatibus voluptates sed, enim excepturi doloribus et. Porro laborum magnam aperiam debitis quis eius, nobis, enim, fugit necessitatibus officiis at corrupti tenetur. Harum deserunt, ipsa deleniti mollitia minus fugiat blanditiis iusto suscipit omnis odit ea? Rem tempora dolorum, vero quae sapiente excepturi perspiciatis nemo accusantium quaerat reiciendis esse pariatur tempore aliquam nostrum. A, sint odio. Illum?
        </>
    );
};

export default Login;