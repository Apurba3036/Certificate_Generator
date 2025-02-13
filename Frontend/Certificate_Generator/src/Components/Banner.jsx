import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='px-4 py-32 mx-auto mb-9' style={{ backgroundSize: 'cover',backgroundImage: 'url("https://iubat.edu/wp-content/uploads/2019/07/IUBAT-Front-view.jpg")' }}>
            <div className='text-white text-center'>
                <h1 className='text-5xl lg:text-6xl leading-snug font-bold mt-6'>Welcome to Our Certificate Generator System</h1>
                <p className='text-orange-500 lg:3/5 mx-auto mt-5 font-primary'>This website is made for the Students of IUBAT to get the certificate easily<span className='text-amber-600'>.........</span> </p>
                <div className='mt-5'>
                    <Link to="/about" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>Learn More  <FaArrowRight className='ml-1'></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;