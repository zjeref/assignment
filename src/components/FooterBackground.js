import React from 'react'
import footerbg from '../assets/images/footer-bg.png'

const FooterBackground = () => {
    return (

        <div className="absolute bottom-0 -z-20 ">
            <img src={footerbg} alt="" className='min-w-max' />

        </div>

    )
}

export default FooterBackground
