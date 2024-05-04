import React from 'react'
import LoveImage from '../../assets/lvoe.png'

const Navbar = () => {
  return (
    <div>
        <div className='mb-20 text-2xl font-semibold text-white'>
          <div className="flex">
            <img src={LoveImage} alt="" className='w-20 h-auto'/>
            <p className="mt-2 ml-2 text-pink-500">Dating App</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar