import React from 'react'
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
    // https://img3.wallspic.com/previews/4/2/0/3/3/133024/133024-hug-sunlight-backlighting-love-affection-500x.jpg
  return (
    <div className='lg:py-[3%] py-12 lg:px-16 bg-[url(https://img3.wallspic.com/previews/4/2/0/3/3/133024/133024-hug-sunlight-backlighting-love-affection-500x.jpg)] bg-center bg-cover lg:h-screen h-screen w-full'>
        <Navbar />
        <div className="">
            
        </div>


        <Footer />
    </div>
  )
}

export default HomePage