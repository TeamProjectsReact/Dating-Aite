import React from 'react'
import LoveImage from '../../assets/lvoe.png'

const Navbar = () => {
  return (
    <div>
        <div className='mb-20 text-2xl font-semibold text-white'>
            <img src={LoveImage} alt="" className='w-50 h-50'/>
        </div>
    </div>
  )
}

export default Navbar