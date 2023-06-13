import { toast } from 'react-hot-toast';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import {
    Avatar,
    Button,
    Card,
    Input,
    Slider,
    Typography,
} from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FcGoogle, FcAddImage } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../Utils/getCroppedImg';
import axios from 'axios';
import { RxCross2 } from 'react-icons/rx';


const Registration = () => {
    const { user, signUp, updateUserProfile, signInWithGoogle, setIsLoading } = useAuth();
    const { register, handleSubmit, formState: { errors }, setError, watch } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const previousLocation = location?.state?.from || '/';

    const [ hidden, setHidden ] = useState( true );
    const [ confirmHidden, setConfirmHidden ] = useState( true );
    const [ selectedImage, setSelectedImage ] = useState( null );
    const [ croppedImage, setCroppedImage ] = useState( null );
    const [ imageName, setImageName ] = useState( null );

    const handleImageChange = ( event ) => {
        const file = event.target.files[ 0 ];
        if ( file ) {
            setImageName( file.name );
            setSelectedImage( URL.createObjectURL( file ) );
        } else {
            setImageName( null );
            setSelectedImage( null );
        }
    };

    const clearImageInput = ( e ) => {
        e.preventDefault();
        setSelectedImage( null );
        setImageName( null );
        document.getElementById( 'profilePicture' ).value = '';
    };

    // ! --------------------------------------------- //

    // ? Cropper
    const [ crop, setCrop ] = useState( { x: 0, y: 0 } );
    const [ zoom, setZoom ] = useState( 1 );
    const aspect = 1;

    const onCropChange = ( crop ) => {
        setCrop( crop );
    };

    const onCropComplete = async ( _, croppedAreaPixels ) => {
        try {
            const croppedImage = await getCroppedImg( selectedImage, croppedAreaPixels );
            const croppedFile = new File( [ croppedImage ], imageName );
            setCroppedImage( croppedFile );
        } catch ( error ) {
            toast.error( "Image could not be processed." );
            console.error( 'Error cropping image:', error );
        }
    };


    // ! ------------------------------------------ //

    const onSubmit = async ( { name, email, password } ) => {

        const formData = new FormData();
        formData.append( 'image', croppedImage );
        formData.append( 'key', import.meta.env.VITE_IMAGEBB_API_KEY );
        try {
            setIsLoading( true );
            const data = await axios.post( 'https://api.imgbb.com/1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            } );
            // ! (-_-) //
            const photoURL = await data.data.data?.url;
            try {
                await signUp( email, password );
                await updateUserProfile( name, photoURL );
                setIsLoading( false );
                toast.success( 'Account created succcesfully!' );
            } catch ( error ) {
                setIsLoading( false );
                setError( 'email', {
                    type: 'existingUser',
                    message: 'User already exists'
                } );
            }
        } catch ( error ) {
            console.log( error );
            setIsLoading( false );
            toast.error( 'Something went wrong!' );
        };
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            toast.success( 'You are logged in!' );
        } catch ( error ) {
            console.log( error );
        }
    };

    useEffect( () => {
        if ( user ) {
            navigate( previousLocation );
        }
    }, [ user ] );

    // useEffect(() => {
    //     console.log( selectedImage );
    // }, [selectedImage])



    return (
        <div className='grid place-content-center w-full h-full mt-8'>
            <Helmet>
                <title>Lingooo | Registration</title>
            </Helmet>
            <Card color="transparent" shadow={ false } className='lg:max-w-lg w-full'>
                <Typography variant="h4" className="text-black dark:text-white">
                    Create an account.
                </Typography>
                <form onSubmit={ handleSubmit( onSubmit ) } className="mt-8 mb-2 w-80">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            size="lg"
                            label="Full Name"
                            error={ !!errors.name }
                            { ...register( 'name', { required: true, minLength: 2, maxLength: 24 } ) }
                            className='dark:border-2 dark:text-white'
                        />
                        <Typography variant="small" color="red" className={ `${ errors.name ? 'inline-flex' : 'hidden' } gap-1 font-normal -mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { errors.name?.type === 'required' ? 'Enter your name' : 'Name cannot be less than 2 characters long and exceed 24 characters.' }
                        </Typography>
                        <Input
                            size="lg"
                            label="Email"
                            error={ !!errors.email }
                            { ...register( 'email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i } ) }
                            className='dark:border-2 dark:text-white'
                        />
                        <Typography variant="small" color="red" className={ `${ errors.email ? 'inline-flex' : 'hidden' } gap-1 font-normal -mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { errors.email?.type === 'required' ? 'Email cannot be empty' : errors.email?.type === 'pattern' ? 'Invalid email' : 'User already exists' }
                        </Typography>
                        <div className='relative'>
                            <Input
                                type={ hidden ? 'password' : 'text' }
                                size="lg"
                                label="Password"
                                error={ !!errors.password }
                                className='dark:border-2 dark:text-white'
                                { ...register( 'password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/
                                } ) }
                            />
                            {
                                hidden ?
                                    <AiFillEye size={ 20 } className="absolute top-1/2 right-2 -translate-y-1/2 box-content lg:cursor-pointer dark:text-white" onClick={ () => setHidden( false ) } />
                                    :
                                    <AiFillEyeInvisible size={ 20 } className="absolute top-1/2 right-2 -translate-y-1/2 box-content lg:cursor-pointer dark:text-white" onClick={ () => setHidden( true ) } />
                            }
                        </div>
                        <Typography variant="small" color="red" className={ `${ errors.password ? 'inline-flex' : 'hidden' } gap-1 font-normal -mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { errors?.password?.type === 'required' ? 'Password cannot be empty' : 'Password must be at least 6 characters long and contain at least one number, one uppercase letter, one lowercase letter and a special character.' }
                        </Typography>

                        {/* Password Confirmation */ }
                        <div className='relative'>
                            <Input
                                type={ confirmHidden ? 'password' : 'text' }
                                size="lg"
                                label="Confirm Password"
                                error={ !!errors.confirmPassword }
                                className='dark:border-2 dark:text-white'
                                { ...register( 'confirmPassword', {
                                    required: true,
                                    validate: ( value ) => value === watch( 'password' ) || "Passwords do not match"
                                } ) }
                            />
                            {
                                confirmHidden ?
                                    <AiFillEye size={ 20 } className="absolute top-1/2 right-2 -translate-y-1/2 box-content lg:cursor-pointer dark:text-white" onClick={ () => setConfirmHidden( false ) } />
                                    :
                                    <AiFillEyeInvisible size={ 20 } className="absolute top-1/2 right-2 -translate-y-1/2 box-content lg:cursor-pointer dark:text-white" onClick={ () => setConfirmHidden( true ) } />
                            }
                        </div>
                        <Typography variant="small" color="red" className={ `${ errors.confirmPassword ? 'inline-flex' : 'hidden' } gap-1 font-normal -mt-2 text-xs` }>
                            <InformationCircleIcon className="w-4 h-4 -mt-px text-red-500" />
                            { errors.confirmPassword?.type === 'required' ? 'Re-enter your password' : errors.confirmPassword?.type === 'validate' && 'Passwords do not match' }
                        </Typography>

                        <div className='border dark:border-2 rounded-lg w-full relative'>
                            <label htmlFor="profilePicture" className="flex items-center gap-3 text-sm p-2">
                                <FcAddImage size={ 32 } className='box-content' />
                                <span className='text-blue-gray-400 flex-1'>{ imageName ? 'Selected: ' + imageName : 'Choose a profile picture (optional)' }</span>
                                <input
                                    { ...register( 'profilePicture', { required: false } ) }
                                    id='profilePicture'
                                    type="file"
                                    accept=".jpeg, .jpg, .png, .webp"
                                    onChange={ handleImageChange }
                                    className='invisible absolute top-0 left-0 w-full h-full'
                                />
                                {
                                    selectedImage &&
                                    <Button onClick={ clearImageInput } color='red' size='sm' className='w-2 h-4 m-0 box-content grid place-content-center rounded'>
                                        <RxCross2 size={ 20 } className='box-content text-white' />
                                    </Button>
                                }
                            </label>
                            {
                                selectedImage &&
                                <div className='p-6 grid place-content-center border-t w-full h-40 relative'>
                                    <Cropper
                                        image={ selectedImage }
                                        crop={ crop }
                                        zoom={ zoom }
                                        aspect={ aspect }
                                        cropShape="round"
                                        showGrid={ false }
                                        onCropChange={ onCropChange }
                                        onCropComplete={ onCropComplete }
                                        onZoomChange={ zoom }
                                        className='w-full h-10 max-h-10 absolute top-0 left-0'
                                    />
                                </div>
                            }
                        </div>
                        {
                            selectedImage &&
                            <input
                                type='range'
                                value={ zoom }
                                min={ 1 }
                                max={ 3.3 }
                                step={ 0.05 }
                                onChange={ ( e ) => setZoom( e.target.value ) }
                            />
                        }

                    </div>
                    <Button className="bg-secondary mt-6" fullWidth type="submit">
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{ " " }
                        <Link
                            to='/login'
                            className="font-medium text-primary transition-colors hover:text-blue-700 duration-200"
                        >
                            Login
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

export default Registration;