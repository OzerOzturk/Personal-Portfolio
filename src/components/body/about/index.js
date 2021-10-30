import React from 'react'
import SocialContact from '../../common/social-contact';
import './about.css';
function About() {
    return (
        <div className='about'>
            <div className='about-top' >
                <div className='about-info'>
                    Hi there 👋, I'm <br/> <span className='info-name'> Özer Öztürk</span>.
                    <br/>I'm developing various applications with great passion and curiosity. As a frontend developer, I look forward to doing good jobs with a good team. 
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.png').default} className='picture' />
                </div>
            </div>
            <div className='about-bottom'></div>
            <SocialContact/>
        </div>
    )
}

export default About;
