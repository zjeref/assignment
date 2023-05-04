import React from 'react'
import s1 from '../assets/images/s-1.png'
import s2 from '../assets/images/s-2.png'
import s3 from '../assets/images/s-3.png'
import s4 from '../assets/images/s-4.png'
import s5 from '../assets/images/s-5.png'

const Services = () => {
    return (
        <div className="w-full bg-blue-900 flex justify-center">
            <div className="max-w-6xl w-full py-16 space-y-10  text-white  md:px-20 px-4">
                <div className="w-full text-center">
                    <div className="flex space-x-2">
                        <h1 className="font-bold text-3xl">Our Services</h1>
                        <div className="w-5 h-5 rounded-full bg-yellow-400 my-auto">
                        </div>
                    </div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloribus.</h1>
                </div>
                <div className="flex md:space-x-2 flex-wrap justify-evenly">
                    <div className="service-card">
                        <div className='bg-white h-32 flex justify-center items-center rounded-md'>
                            <img src={s1} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className='font-semibold'>Brand Promotion</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    <div className="service-card">
                        <div className='bg-white h-32  flex justify-center items-center rounded-md'>
                            <img src={s2} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className='font-semibold'>Video Marketing</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    <div className="service-card">
                        <div className='bg-white h-32  flex justify-center items-center rounded-md'>
                            <img src={s3} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className='font-semibold'>Site Analysis</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="service-card" >
                        <div className='bg-white h-32  flex justify-center items-center rounded-md'>
                            <img src={s4} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className='font-semibold'>Social Media Marketing</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    <div className="service-card">
                        <div className='bg-white h-32  flex justify-center items-center rounded-md'>
                            <img src={s5} alt="" className='w-12 h-12' />
                        </div>
                        <h3 className='font-semibold'>SEO Optimimization</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="text-center">
                    <button className='px-4 py-1 bg-yellow-400 rounded-3xl text-sm'>Read More</button>
                </div>
            </div>

        </div>
    )
}

export default Services
