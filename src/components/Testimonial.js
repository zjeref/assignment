import React from 'react'
import client from '../assets/images/client.png'
import quote from '../assets/images/quote.png'
import nextwhite from '../assets/images/next-white.png'
import prevwhite from '../assets/images/prev-white.png'



const Testimonial = () => {
    return (
        <div className="max-w-5xl flex flex-col justify-between space-y-5 md:px-20 px-4 my-10">
            <div>
                <div className="flex space-x-2">
                    <h1 className="font-bold text-3xl">Testimonials</h1>
                    <div className="w-5 h-5 rounded-full bg-yellow-400 my-auto">
                    </div>
                </div>
                <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, laboriosam.</p>
            </div>
            <div className="space-y-2">
                <img src={client} alt="" />
                <h4 className="font-semibold">Normal distribution</h4>
                <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veniam, incidunt eius rerum in velit neque. Laudantium expedita nihil dolorem totam voluptas doloribus iure? Dicta!</p>
                <img src={quote} alt="" />
            </div>
            <div className="w-full flex justify-end space-x-2 ">
                <img src={prevwhite} alt="" className='bg-yellow-400 py-2 px-1 rounded-full' />
                <img src={nextwhite} alt="" className='bg-yellow-400 py-2 px-1 rounded-full' />
            </div>
        </div>
    )
}

export default Testimonial
