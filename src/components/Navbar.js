import React from 'react'
import call from '../assets/images/call.png'
import searchicon from '../assets/images/search-icon.png'

const Navbar = () => {
    return (

        <div className='max-w-6xl w-full flex flex-col items-center space-y-3 sm:space-y-0 flex-wrap sm:flex-row justify-between text-white px-5 py-5'>
            <h3 className='font-bold'>SEOTECH</h3>
            <div className='flex space-x-2'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact Us</p>
            </div>
            <div className='flex space-x-4 items-center'>
                <img src={call} alt="" />
                <p>Call: + 01 1234567890</p>
                <img src={searchicon} alt="" />
            </div>
        </div>

    )
}

export default Navbar
