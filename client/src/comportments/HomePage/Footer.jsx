import React from 'react'
import LoveImg from '../../assets/lvoe.png'
import MyIcon from '@reacticons/ionicons';

const Footer = () => {
  
  const styles = {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://wallpapercave.com/wp/wp8675176.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <footer className='text-white bg-pink-500 py-20 px-24 bg-center bg-cover' style={styles}>
      <div className="lg:flex">
        <div className="w-full mx-8">
          {/* <h1 className="pb-8 font-semibold text-2xl">Lovly Datings</h1> */}
          <div className="flex">
            <img src={LoveImg} alt="" className='w-24 h-auto'/>
            <p className="mt-4 text-xl love-title">Lovly Datings</p>
          </div>
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt molestiae distinctio consectetur vel? Odio corporis earum maxime dolorem temporibus est facilis consectetur, aut maiores dolorum inventore magni sapiente repellat?</p>
        </div>
        <div className="w-full mx-8">
          <h1 className="pb-8 font-semibold text-2xl">Our Services</h1>
          <div className="">
            <p className=""><MyIcon name='heart'></MyIcon> <span className='pl-2'>GuideLines for Dating</span></p>
            <p className=""><MyIcon name='heart'></MyIcon> <span className='pl-2'>Real Accounts</span></p>
            <p className=""><MyIcon name='heart'></MyIcon> <span className='pl-2'>Best Destinations</span></p>
            <p className=""><MyIcon name='heart'></MyIcon> <span className='pl-2'>help to Find life Partner</span></p>
          </div>
        </div>
        <div className="w-full mx-8">
          <h1 className="pb-8 font-semibold text-2xl">More About</h1>
        </div>
        <div className="w-full mx-8">
          <h1 className="pb-8 font-semibold text-2xl">Contact</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer