// import React, { useContext, useEffect } from 'react';
// import { AppContext } from '../context';
// import HeroSection from './HeroSection';
// import './About.css';
import { NavLink } from 'react-router-dom';
// import { Button } from './Button';
import comm1 from '../assets/comm1.jpg'
import comm2 from '../assets/comm2.jpg'
import comm3 from '../assets/community.jpg'

function About(props) {
    // const data={
    //       image:"./images/mobile.jpg",
    //       name:"About Us"
    // }

    // const { updateAbout } = useContext(AppContext);

    // useEffect(() => {
    //     updateAbout();
    // }, []);

    return (
        // <HeroSection {...data} />
        <>
            {/* <HeroSection /> */}

            <div className=' mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

                <div className=' pl-[80px]'>
                    <h1 className="hero-heading">About Us</h1>
                    {/* <p className="hero-top-data">
                        This is your pixelKart page
                    </p> */}
                    <p class='mt-[2rem] mb-6 text-justify'>PixelKart is more than just a platform; it's a community that aims to nurture the growth and success of freelance developers. We are dedicated to making the process of finding and utilizing high-quality images as seamless and affordable as possible. Join us on our journey to revolutionize the way developers access visual resources and elevate the standards of their work.</p>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-1.5xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <NavLink to='/contact'>Join Us</NavLink>
                    </button>
                </div>
                <div className=' pr-[80px] '>
                    <picture>
                        <img src={comm3} className=" h-[350px] w-[600px]  border rounded-lg" alt='hero-img' />
                    </picture>
                </div>
            </div>

            <hr class=' h-1 mx-[50px] my-8 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700'></hr>

            <div className=' pt-8 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='section-img pl-[80px]'>
                    <picture class=''>
                        <img src={comm2} className=" h-[350px] w-[600px]  border rounded-lg" alt='hero-img' />
                    </picture>
                </div>
                <div className='pr-[80px]'>
                    <p className='mt-[7rem] text-justify text-1xl'>
                        PixelKart is an innovative startup that provides a valuable platform for freelance developers to download high-quality images for free. Our mission is to empower developers by offering them a vast collection of visually appealing images that they can utilize in their projects without any cost or copyright restrictions.
                    </p>

                </div>


            </div>

            <hr class=' h-1 mx-[50px] my-8 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700'></hr>

            <div className='container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

                <div className=' pl-[80px]'>
                    <p class='mt-[7rem] text-justify'>At PixelKart, we understand the importance of visual elements in enhancing the overall user experience and making websites, applications, and digital products more engaging. However, sourcing suitable images can often be time-consuming, costly, or restricted by licensing agreements. That's why we have created a solution specifically tailored to meet the needs of freelance developers.
                    </p>
                </div>
                <div className=' pr-[80px] '>
                    <picture>
                        <img src={comm1} className=" h-[350px] w-[600px]  border rounded-lg" alt='hero-img' />
                    </picture>
                </div>
            </div>

            <hr class=' h-1 mx-[50px] my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700'></hr>

            <div class="bg-light py-5 ">
                <div class="container py-5">
                    <div class="row mb-4 pb-8">
                        <div class="col-lg-5">
                            <h2 class="display-4 text-4xl">Our Developers</h2>
                            {/* <p class="font-italic text-muted">.</p> */}
                        </div>
                    </div>

                    <div class="row flex flex-row pl-[200px] pr-[200px] justify-between ">

                        <div class=" pr-7 pt-7 pl-7 pb-7 border rounded  shadow-2xl shadow-gray-800/50  justify-center col-xl-6 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-8 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Ranjan Gupta</h5><span class="small text-uppercase text-muted justify-center pl-4">Founder</span>

                            </div>
                        </div>

                        <div class="pr-7 pt-7 pl-7 pb-7 border rounded  shadow-2xl shadow-gray-800/50 col-xl-4 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4 pb-3"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-8 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Ranjan Gupta</h5><span class="small text-uppercase text-muted pl-4">Founder</span>

                            </div>
                        </div>

                        <div class="pr-7 pt-7 pl-7 pb-7 border rounded  shadow-2xl shadow-gray-800/50 col-xl-4 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-8 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Ranjan Gupta</h5><span class="small text-uppercase text-muted pl-4">Founder</span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;