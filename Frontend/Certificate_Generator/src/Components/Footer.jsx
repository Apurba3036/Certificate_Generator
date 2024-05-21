import React from 'react';

const Footer= () => {
    return (
        <div className='bg-black mt-10 mb-1'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-screen-xl md;px-24 lg:px-4'>
                <div className='text-center'>
                    <div className='grid grid-cols-3 gap-5 pb-5 lg:col-span-4 md:grid-cols-4'>
                        <div><p className='font-medium tracking-wide text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2 '>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>News</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Notice</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Progarmmes</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Articles</a>
                            </li>
                        </ul>
                        </div>
                      
                        <div><p className='font-medium tracking-wide text-gray-300'>Targets</p>
                        <ul className='mt-2 space-y-2 '>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Education</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Research</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Club</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Lab</a>
                            </li>
                        </ul>
                        </div>
                        <div><p className='font-medium tracking-wide text-gray-300'>Sources</p>
                        <ul className='mt-2 space-y-2 '>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Faculties</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Blogs</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Books</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Library</a>
                            </li>
                        </ul>
                        </div>
                        <div><p className='font-medium tracking-wide text-gray-300'>Contact</p>
                        <ul className='mt-2 space-y-2 '>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Address: Ashulia,Dhaka</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>tisha@gmail.com</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Github:Tisha</a>
                            </li>
                            <li>
                                <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange'>Twitter</a>
                            </li>
                           
                        </ul>
                      
                        </div>
                    </div>
                        <p className='text-gray-500 transition-colors duration-300 hover:text-orange mx-auto mt-5 mb-5 pb-5'>Developed By: Tofairat Jahan Tisha</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;