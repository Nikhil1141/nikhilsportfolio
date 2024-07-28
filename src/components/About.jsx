import React, { memo } from 'react'
import pp from '../images/pp.jpg'
import '../style/about.css'

const About = () => {
    return (
        <div className="container my-5" id='about'>
            <div className="row mb-5 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-hero">
                <div className="col-lg-7">
                    <h2 className='mb-3 self'>My self...</h2>
                    <i className="lead">"I'm a 2025 passout student from VIT Vellore. I'm from Hyderabad, Telangana. My hobbies are playing cricket, listening music and I am very much intrested in Hindu Mythology. I'm a passionate Frontend developer. "</i>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a href='#skills' className='btnn'><button type="button" className="btn btn-outline-dark btn-lg px-4 m-4">Know more...</button></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle img-circle" src={pp} alt='pic5' />
                </div>
            </div>
        </div>
    )
}

export default memo(About)