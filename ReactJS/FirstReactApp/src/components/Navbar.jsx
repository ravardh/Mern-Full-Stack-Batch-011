import React from 'react'


function Navbar(){
    return (
        <>
        <div className='container-fluid bg-primary text-white text-center p-1 d-flex align-items-center justify-content-between'>
            <a href="#home" className='text-decoration-none text-light'><h1>My Portfolio</h1></a>
            <div className='d-flex gap-3 align-items-center'>
                <a href="#about" className='text-decoration-none text-light'>About</a>
                <a href="#project" className='text-decoration-none text-light'>Projects</a>
                <a href="#education" className='text-decoration-none text-light'>Education</a>
                <a href="#certifications" className='text-decoration-none text-light'>Certification</a>
                <a href="#contact" className='text-decoration-none text-light'>Contact Me</a>
            </div>
        </div>
        </>
    )
}

export default Navbar