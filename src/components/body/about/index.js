import React from 'react'
import SocialContact from '../../common/social-contact';
import './about.css';
function About() {
    return (
        <div className='about'>
            <div className='about-top' >
                <div className='about-info'>
                    Hi there 👋, I'm <span className='info-name'> Özer</span>
                    <br/>A curious and passionate Frontend Developer <br /> I'm developing various web applications with JavaScript / ReactJS <br />
                    Contributing to amazing projects as a team player is my main focus. 
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.png').default} alt='coding' className='picture' />
                </div>
            </div>
            <div className='about-bottom'></div>
            <SocialContact/>
        </div>
    )
}

export default About;
