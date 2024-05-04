import React from 'react'
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
    // https://wallpapercave.com/wp/dxK9FJ3.jpg
  return (
    <div className="">
      <div className='lg:py-[3%] py-12 lg:px-16 px-8 bg-[url(https://wallpapercave.com/wp/dxK9FJ3.jpg)] lg:h-[80vh] h-screen w-full lg:bg-center bg-right bg-cover lg:h-screen h-screen w-full'>
        <Navbar />
        <div className="">
            <h1 className="lg:mx-16 mx-0 text-white text-5xl">Find your <span className='text-pink-500'>best trusted</span> <br /> and <span className='text-pink-500'>lovelyness</span> partner</h1>
        </div>


        
      </div>
      <Footer />
    </div>
  )
}

export default HomePage