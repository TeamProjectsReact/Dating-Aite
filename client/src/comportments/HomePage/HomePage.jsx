import React from 'react'
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import Navbar from './Navbar';
import LoveImage from '../../assets/lvoe.png'

const HomePage = () => {
    // https://wallpapercave.com/wp/wp8675176.jpg
    // https://wallpapercave.com/wp/wp8829734.jpg
    // https://wallpapercave.com/wp/wp8829589.jpg
    // https://wallpapercave.com/wp/wp9199177.jpg
    // https://wallpapercave.com/wp/wp9199217.jpg
    // #1b0802
  return (
    <div className="">
      
      <div className='lg:py-[3%] py-12 lg:px-16 px-8 bg-[#1b0802] lg:h-[80vh] h-screen w-full lg:bg-center bg-right bg-cover lg:h-screen h-screen w-full'>
        <Navbar />
        <div className="">
          <div className="lg:mx-16 mx-0">
            <h1 className="love-title text-white text-5xl">Find your <span className='text-pink-500'>Best, Trusted</span> <br /> and <span className='text-pink-500'>Lovelyness</span> partner</h1>
            <p className="text-white py-2">The Best Trusted and Most use Dating Site</p>

            <button className='border border-pink-500 my-4 py-4 px-8 text-pink-500 rounded-full font-semibold duration-500 hover:bg-pink-500 hover:text-white'>Be a Member and Find Your Love</button>
          </div>
        </div>


        
      </div>
      <Footer />
    </div>
  )
}

export default HomePage