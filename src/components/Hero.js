import React from 'react'
import heroImg from '../assets/images/slider-img.png'

const Hero = () => {
    return (
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-between md:space-x-5 space-y-5 my-[15vh] md:px-20 px-4">
            <div className="w-full md:w-1/2 space-y-5 text-white">
                <h1 className="text-5xl font-bold">The best marketing</h1>
                <p>It is a long established fact that a reader will be distracted by the readble content of a page when looking</p>
                <div className="flex space-x-2">
                    <button className='px-4 py-1 bg-yellow-300 rounded-3xl text-sm'>Contact us</button>
                    <button className='px-3 py-1 bg-white text-black rounded-3xl text-sm'>Get a Quote</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 ">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero
