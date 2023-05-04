import React from 'react'
import t1 from '../assets/images/t-1.png'
import t2 from '../assets/images/t-2.png'
import t3 from '../assets/images/t-3.png'
import fb from '../assets/images/fb.png'
import linkedin from '../assets/images/linkedin.png'
import insta from '../assets/images/insta.png'
import twitter from '../assets/images/twitter.png'


const Team = () => {
    return (
        <div className="max-w-5xl flex flex-col justify-between space-y-5 md:px-20 px-4 my-10">
            <div className='text-center mb-5'>
                <div className="flex space-x-2 justify-center">
                    <h1 className="font-bold text-3xl">Meet The Team</h1>
                    <div className="w-5 h-5 rounded-full bg-yellow-400 my-auto">
                    </div>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate.
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
                <div className='max-w-lg'>
                    <div className="flex justify-center">
                        <div className="h-32 w-[180px] absolute bg-blue-900 transform -rotate-12 rounded-lg -z-20">

                        </div>
                        <img src={t1} alt="" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="font-bold">Yokit Den</h3>
                        <p className="text-sm px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem, perspiciatis quis minima voluptatibus deleniti?</p>
                        <div className="flex justify-center space-x-2">
                            <span>
                                <img src={fb} alt="" />
                            </span>
                            <span>
                                <img src={twitter} alt="" />
                            </span>
                            <span>
                                <img src={linkedin} alt="" />
                            </span>
                            <span>
                                <img src={insta} alt="" />
                            </span>
                        </div>
                    </div>

                </div>
                <div className='max-w-lg'>
                    <div className="flex justify-center md:mt-20">
                        <div className="h-32 w-[180px] absolute bg-blue-900 transform -rotate-12 rounded-lg -z-20">

                        </div>
                        <img src={t2} alt="" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="font-bold">Yokit Den</h3>
                        <p className="text-sm px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem, perspiciatis quis minima voluptatibus deleniti?</p>
                        <div className="flex justify-center space-x-2">
                            <span>
                                <img src={fb} alt="" />
                            </span>
                            <span>
                                <img src={twitter} alt="" />
                            </span>
                            <span>
                                <img src={linkedin} alt="" />
                            </span>
                            <span>
                                <img src={insta} alt="" />
                            </span>
                        </div>
                    </div>

                </div>
                <div className='max-w-lg'>
                    <div className="flex justify-center md:mt-40">
                        <div className="h-32 w-[180px] absolute bg-blue-900 transform -rotate-12 rounded-lg -z-20">

                        </div>
                        <img src={t3} alt="" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="font-bold">Yokit Den</h3>
                        <p className="text-sm px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem, perspiciatis quis minima voluptatibus deleniti?</p>
                        <div className="flex justify-center space-x-2">
                            <span>
                                <img src={fb} alt="" />
                            </span>
                            <span>
                                <img src={twitter} alt="" />
                            </span>
                            <span>
                                <img src={linkedin} alt="" />
                            </span>
                            <span>
                                <img src={insta} alt="" />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Team
