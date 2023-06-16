import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import ClassesGrid from './ClassesGrid';
import InstructorsGrid from './InstructorsGrid';
import Communities from './Communities';
import ReviewsSection from './ReviewsSection';
import Header from '../../Shared/Header/Header';
import Home_Navbar from './Home_Navbar';
import scrollToTopOnRender from '../../Utils/scrollToTopOnRender';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Home = () => {
    scrollToTopOnRender();
    const { axiosSecure } = useAxiosSecure();
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axiosSecure.get( `${ import.meta.env.VITE_BACKEND_URL }` )
                    const data = response.data;
                    console.log( data );
                } catch (error) {
                    console.log( error );
                }
            }
        )()
    }, [])
    

    return (
        <div>
            <Helmet>
                <title>Lingooo | Home</title>
            </Helmet>
            <Home_Navbar />
            <Header />
            <div className='max-w-screen-2xl mx-2 lg:mx-auto'>
                <ClassesGrid />
                <InstructorsGrid />
            </div>
            <ReviewsSection />
            <Communities />
        </div>
    );
};

export default Home;