import React from 'react'
import Separator from '../../common/separator';
import { BlogData } from '../../data/blog';
import BlogCard from './blog-card';
import './blog.css'
function Blog() {
    const data = BlogData;
    return (
        <div className='blog'>
            <Separator/>
            <label className='section-title'>Featured Blog Posts</label>
            <div className="blog-list">
                {data.map((item) => {
                    return  <BlogCard item={item}/>
                    
                })}
            </div>
             
        </div>
    )
}

export default Blog;
