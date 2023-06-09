import React from 'react';
import Header from './../../Shared/Header/Header';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className='text-6xl dark:bg-black dark:text-white'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <button className='btn btn-primary mx-10 my-5'>Hello</button>
            <button className='btn btn-secondary btn-sm mx-10 my-5'>Hello</button>
            Hellow there
        </div>
    );
};

export default Home;