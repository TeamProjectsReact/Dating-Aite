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

    const styles = {
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://wallpapercave.com/wp/wp8675176.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  return (
    <div className="">
      
      <div className='lg:py-[3%] py-12 lg:px-16 px-8 lg:h-[80vh] h-full w-full lg:bg-center bg-right bg-cover lg:h-screen h-screen w-full' style={styles}>
        {/* <Navbar /> */}
        <div className="lg:grid grid-cols-2 gap-4">
          <div className="my-16">
            <div className="lg:mx-16 mx-0">
              <h1 className="love-title text-white text-5xl">Find your <span className='text-pink-500'>Best, Trusted</span> <br /> and <span className='text-pink-500'>Lovelyness</span> partner</h1>
              <p className="text-white py-2 font-semibold">The Best Trusted and Most use Dating Site</p>
              <p className="text-white my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum libero ab ratione totam, inventore sit, iure, ullam tempore magni eaque animi a delectus minima saepe ipsam qui possimus fugit.
                Esse reiciendis aperiam, vitae optio corporis totam eos explicabo facilis, assumenda tempora minima. Alias id laborum ducimus odit dolores rerum quo in debitis pariatur. Delectus labore dolore corrupti hic pariatur!
              </p>
              <button className='bg-white my-4 py-4 px-8 text-pink-500 rounded-full font-semibold duration-500 hover:bg-pink-500 hover:text-white'>Be a Member and Find Your Love</button>
            </div>
          </div>
          <div className=""></div>
        </div>        
      </div>

      <div className="text-center my-24">
        <h1 className="text-pink-500 text-5xl font-semibold">WELCOME</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus aliquid fuga totam iusto, fugit rem velit quod. Ut qui, in magnam quae culpa nisi expedita rerum mollitia blanditiis facere.
          Nesciunt aliquid labore nobis hic facere minus repellat veniam est eveniet tempora voluptates doloribus quia officiis rem esse quis, veritatis obcaecati perferendis eos cum deserunt ex, nam vitae. Et, minus.
          Dolorum asperiores, ullam sunt officia aut culpa. Id deserunt quaerat veniam quidem sint eaque delectus iure libero sapiente veritatis velit molestiae dolore nemo, perspiciatis placeat ab obcaecati animi recusandae quia.
          Voluptate odit hic veritatis explicabo pariatur non ipsum. Cupiditate sunt rem ut odio culpa nihil, exercitationem libero quos molestias nostrum vitae accusantium laboriosam commodi rerum nesciunt ipsum sit quam quis.
          Harum, illum minima. Quisquam aut culpa ut mollitia cupiditate dolores obcaecati nulla molestias? Odio quia nemo, earum necessitatibus nostrum, soluta, debitis ipsum amet maxime optio explicabo dignissimos ullam vero porro.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage