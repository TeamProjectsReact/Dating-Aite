import React from 'react'
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';

const HomePage = () => {
    // https://wallpapercave.com/wp/wp6367798.jpg
  return (
    <div className='lg:py-[4%] py-12 lg:px-16 bg-[url(https://wallpapercave.com/wp/wp6367798.jpg)] bg-center bg-cover lg:h-screen h-screen w-full'>
        HI all

        <div className="inline-block align-bottom">
            <Footer />
        </div>
    </div>
  )
}

export default HomePage