import React from 'react'
import workimg from '../assets/images/work-img.png'
import work1 from '../assets/images/work-i1.png'
import work2 from '../assets/images/work-i2.png'

const Work = () => {
    return (
        <div className="max-w-5xl flex flex-col justify-between space-y-5 md:px-20 px-4 my-10">
            <div className="mb-10">
                <div className="flex space-x-2">
                    <h1 className="font-bold text-3xl">How We Work</h1>
                    <div className="w-5 h-5 rounded-full bg-yellow-400 my-auto">
                    </div>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, enim.</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between space-x-5">
                <div className="w-full md:w-1/2 space-y-4">
                    <div className="shadow-slate-300 shadow-2xl p-4">
                        <div className="flex space-x-2">
                            <img src={work1} alt="" className='w-8 h-8' />
                            <h1 className="font-semibold my-auto">We Generate A Good Idea First!</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione ea? Deleniti ex laboriosam adipisci!</p>
                    </div>
                    <div className=" shadow-lg p-4">
                        <div className="flex space-x-2">
                            <img src={work2} alt="" className='w-8 h-8' />
                            <h1 className="font-semibold my-auto">Then We Start Applying Ideas</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione ea? Deleniti ex laboriosam adipisci!</p>
                    </div>
                    <button className='px-4 py-1 bg-yellow-500 rounded-3xl text-sm text-white'>Read More</button>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={workimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Work
