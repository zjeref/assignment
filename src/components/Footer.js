import React from 'react'
import call from '../assets/images/call.png'
import envelope from '../assets/images/envelope-white.png'

const Footer = () => {
    return (
        <div className="max-w-5xl flex flex-col md:flex-row items-center md:items-start md:justify-between md:space-x-5 space-y-5 md:space-y-0  md:px-20 px-4 my-10">
            <div className="w-full sm:w-1/2 md:1/4  space-y-2">
                <h2 className="font-semibold">SEOTECH</h2>
                <p className="text-slate-500 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis similique deserunt ducimus magnam amet incidunt nam! Neque minus quis facilis.</p>
            </div>
            <div className="w-full sm:w-1/2 md:1/4 space-y-2">
                <h2>BASIC LINKS</h2>
                <ul className='pl-4 space-y-2'>
                    <li className="text-slate-500 text-sm">Home</li>
                    <li className="text-slate-500 text-sm">About</li>
                    <li className="text-slate-500 text-sm">Services</li>
                    <li className="text-slate-500 text-sm">Contact Us</li>
                </ul>
            </div>
            <div className="w-full sm:w-1/2 md:1/4 space-y-4">
                <h2>CONTACT DETAILS</h2>
                <div className="flex space-x-2">
                    <img src={call} alt="" />
                    <p className="text-slate-500 text-sm">+011234567890</p>
                </div>
                <div className="flex space-x-2">
                    <img src={envelope} alt="" className='w-4 h-4' />
                    <p className="text-slate-500 text-sm">demo@gmail.com</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:1/4 space-y-4 flex flex-col max-w-sm">
                <h1>NEWSLETTER</h1>
                <input type="text" placeholder='Enter your email' className='p-2 bg-transparent border-2 border-slate-500' />
                <button className='w- py-2 bg-yellow-500 rounded-md'>SUBSCRIBE</button>

            </div>
        </div>
    )
}

export default Footer
