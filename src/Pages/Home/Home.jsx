import React from 'react';
import { Helmet } from "react-helmet-async";
import ClassesGrid from './ClassesGrid';
import InstructorsGrid from './InstructorsGrid';
import Communities from './Communities';
import ReviewsSection from './ReviewsSection';
import Header from '../../Shared/Header/Header';
import Home_Navbar from './Home_Navbar';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Lingooo | Home</title>
            </Helmet>
            <Home_Navbar/>
            <Header/>
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