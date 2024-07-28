import React, { memo } from 'react'
import '../style/letsconnect.css'

const Letsconnect = () => {
    return (
        <section className='contact container section' id='contact'>
            <div className='contact__container grid'>
                <div className='contact__info'>
                    <h3 className='contact__title'>Let's talk about everything!</h3>
                </div>
                <form className='contact__form' action=''>
                    <div className='contact__form-group'>
                        <div className='contact__form-div'>
                            <input type="text" className='contact__form-input' placeholder='your name...' />
                        </div>
                        <div className='contact__form-div'>
                            <input type="email" className='contact__form-input' placeholder='your email...' />
                        </div>
                    </div>
                    <div className='contact__form-div'>
                        <input type="text" className='contact__form-input' placeholder='your subject...' />
                    </div>
                    <div className='contact__form-div contact__form-area'>
                        <textarea cols="" rows="" className='contact__form-input' placeholder='Write your message...'></textarea>
                    </div>
                    <button className='btn btn-outline-dark'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default memo(Letsconnect)
// <p className='contact__details'>Don't like the forms? Send me an email. 👋</p>