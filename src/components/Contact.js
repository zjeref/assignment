import React from 'react'

const Contact = () => {
    return (
        <div className="max-w-5xl flex flex-col text-center space-y-8 items-center space-x-5  md:px-20 px-4 my-10 md:pt-20">
            <h1 className="text-xl font-bold">Get In touch</h1>
            <div className="space-y-3">
                <div className="flex space-x-1">
                    <input type="text" placeholder='Name' className="px-2 py-1 rounded-full" />
                    <input type="text" placeholder='Email id' className="px-2 py-1 rounded-full" />
                </div>
                <div className="flex flex-col space-y-3">
                    <input type="text" placeholder='Subject' className="px-2 py-1 rounded-full" />
                    <input type="text" placeholder='Message' className="px-2 py-1 rounded-full" />
                </div>
            </div>

        </div>
    )
}

export default Contact
