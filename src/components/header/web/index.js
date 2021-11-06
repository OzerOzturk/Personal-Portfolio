import React from 'react'
import './web.css'
function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#projects'>
                    <i class="fi fi-rr-browser option-icon">Projects</i>
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                    <i class="fi fi-rr-laptop option-icon">Skills</i>
                </a>
            </div>
            <div className='web-option'>
                <a href='#blog'>
                    <i class="fi fi-rr-edit option-icon">Blog</i>
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                    <i class="fi fi-rr-portrait option-icon">Contact</i>
                </a>
            </div>
        </div>
    )
}

export default Web;
