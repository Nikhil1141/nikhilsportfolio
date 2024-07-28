import React, { memo } from 'react'
import '../style/skills.css'
import Frontendskills from '../subcomponents/Frontendskills'
import Backendskills from '../subcomponents/Backendskills'

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className='text-center m-3 ski'>My Skills...</h2>
            <div className='skills__container container grid'>
                <Frontendskills />
                <Backendskills />
            </div>
        </section>
    )
}

export default memo(Skills)