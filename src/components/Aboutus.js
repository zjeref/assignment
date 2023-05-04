import React from 'react'
import aboutusimg from '../assets/images/about-img.png'
import aboutdots from '../assets/images/about-dots.png'

const Aboutus = () => {
    return (
        <div className="max-w-5xl flex flex-col md:flex-row space-y-8 justify-between space-x-5  md:px-20 px-4 my-40">
            <div className="w-full md:w-1/2 relative">
                <img src={aboutusimg} alt="" />
                <img src={aboutdots} alt="" className="absolute -top-52 -z-10 right-10" />
            </div>
            <div className="w-full md:w-1/2  space-y-5 h-full my-auto">
                <div className="flex space-x-2">
                    <h1 className="font-bold text-3xl">About Us</h1>
                    <div className="w-5 h-5 rounded-full bg-yellow-400 my-auto">
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus animi praesentium? Repellendus, quo iusto fugiat amet inventore molestias molestiae!
                </p>
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-3xl">Read More</button>
            </div>
        </div>
    )
}

export default Aboutus
