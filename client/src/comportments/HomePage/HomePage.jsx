import React from 'react'
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
    // https://wallpapercave.com/wp/wp6367798.jpg
  return (
    <div className='flex flex-col min-h-screen lg:py-[4%] py-12 lg:px-16 bg-[url(https://wallpapercave.com/wp/wp6367798.jpg)] bg-center bg-cover lg:h-screen h-screen w-full'>
        <Navbar />
        <div className="">
            hi al
        </div>


        <Footer />
    </div>
  )
}

export default HomePage