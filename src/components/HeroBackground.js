import React from 'react'
import herobg from '../assets/images/hero-bg.png'

const HeroBackground = () => {
    return (
        <div className="absolute top-0 -z-20 overflow-x-hidden">
            <img src={herobg} alt="" className="min-w-max"/>
        </div>
    )
}

export default HeroBackground