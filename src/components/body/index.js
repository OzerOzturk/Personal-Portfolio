import React from 'react'
import './body.css'
import About from './about/index'
import Projects from './projects/index'
import Skills from './skills'
import Blog from './blog'
import Contact from './contact'
function Body() {
    return (
        <div className='body' >
            <section id='about'>
                <About   />
            </section>
            <section id='projects'>
                <Projects   />
            </section>
            <section id='skills' >
                <Skills/>
            </section>
            <section id='blog'>
                <Blog/>
            </section>
            <section id='contact' >
                <Contact/>
            </section>
        </div>
    )
}

export default Body
