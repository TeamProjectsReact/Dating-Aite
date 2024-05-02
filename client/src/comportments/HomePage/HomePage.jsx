import React from 'react'
import { Fade   } from "react-awesome-reveal";

const HomePage = () => {
    // https://wallpapercave.com/wp/wp3091867.jpg
  return (
    <div>
        <div className='lg:py-[4%] py-12 lg:px-16 bg-[url(https://wallpapercave.com/wp/wp3091867.jpg)] bg-center bg-cover lg:h-[80vh] h-screen w-full'>
            HI all
        </div>
        <Fade  cascade damping={0.1}>
            <p>I will gently appear as I enter the viewport</p>
        </Fade>
    </div>
  )
}

export default HomePage