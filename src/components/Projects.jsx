import React, { memo } from 'react'
import projdata from '../data/projdata'
import '../style/projects.css'

const Projects = () => {
    return (
        <div className='container' id='projects'>
            <h2 className='pro text-center m-3'>My Projects...</h2>
            <div className='projj'>
                {
                    projdata.map((proj) => {
                        return (
                            <div key={proj.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={proj.img} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h4 className='h4'>{proj.title}</h4>
                                        <i>{proj.languages}</i>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default memo(Projects)