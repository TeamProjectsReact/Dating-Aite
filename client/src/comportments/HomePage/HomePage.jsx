import React from 'react'
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
    // https://wallpapercave.com/wp/dxK9FJ3.jpg
  return (
    <div className='lg:py-[3%] py-12 lg:px-16 bg-[url(https://wallpapercave.com/wp/dxK9FJ3.jpg)] bg-center bg-cover lg:h-screen h-screen w-full'>
        <Navbar />
        <div className="">
            
        </div>


        <Footer />
    </div>
  )
}

export default HomePage