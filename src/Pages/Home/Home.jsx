import React from 'react';
import Header from './../../Shared/Header/Header';
import { Helmet } from "react-helmet-async";
import Footer from '../../Shared/Footer/Footer';
import ClassesGrid from './ClassesGrid';
import InstructorsGrid from './InstructorsGrid';
import Communities from './Communities';
import ReviewsSection from './ReviewsSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Lingooo | Home</title>
            </Helmet>
            <Header />
            <div className='max-w-screen-2xl mx-2 lg:mx-auto'>
                <ClassesGrid />
                <InstructorsGrid />
            </div>
            <ReviewsSection />
            <Communities />
            <Footer />
        </div>
    );
};

export default Home;