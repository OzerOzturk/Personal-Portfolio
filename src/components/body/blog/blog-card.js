import React from 'react'
import './blog-card.css'
function BlogCard({item}) {
    return (
        <div className='blog-card'>
            <a href={item.postLink}><img src={item.postLogo} alt='postLogo' className='blog-logo'/></a> 
             <div className='blog-info'>
                <a href={item.postLink}><label className='title-name'>{item.title}</label></a> 
                <div className='blog-desc'>
                    <p>{item.content}</p>
                </div>
             </div>
        </div>
    )
}

export default BlogCard
