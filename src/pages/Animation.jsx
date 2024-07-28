import Spline from '@splinetool/react-spline';
import React, { memo } from 'react'
import '../style/animation.css'

const Animation = () => {
    return (
        <div>
            <Spline className='spline' scene="https://prod.spline.design/GwTXZQhHUhIEy0FG/scene.splinecode" />
            <div className='ani'>
                <h1>Hello, I'm Yepuri Nikhileswar.</h1>
                <i>“A passionate Frontend developer.”</i>
                <div>
                    <a href="#contact"> <button className='btn btn-dark btncon' >Let's Connect</button> </a>
                </div>
            </div>
        </div>
    )
}

export default memo(Animation)
