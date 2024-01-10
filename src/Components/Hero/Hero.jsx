import React from 'react'
import './Hero.css'

import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="her-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand_icon" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right"></div>

    </div>
  )
}

export default Hero