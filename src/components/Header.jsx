import React, { memo } from 'react'
import '../style/header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a href='#yns' className="navbar-brand">YNS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href='#about' className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href='#qualification' className="nav-link">Qualification</a>
                            </li>
                            <li className="nav-item">
                                <a href='#skills' className="nav-link">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href='#contact' className="nav-link">Let's Connect</a>
                            </li>
                            <li className="nav-item">
                                <a href='https://drive.google.com/file/d/1t9wPxtmvFq2H69yRvA87s7D3TI9MB6mK/view?usp=sharing' className="nav-link" id='btn'><button className='btn'>Resume</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default memo(Header)