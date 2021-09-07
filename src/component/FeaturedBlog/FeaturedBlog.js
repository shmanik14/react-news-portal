import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './FeaturedBlog.css';

const FeaturedBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-meadow-15734.herokuapp.com/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="featured-blog">
            <div className="container mx-auto">
                    <div className="px-3">
                        <h2 className="section-heading text-4xl pb-3 mb-3">Featured Blog</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-1">
                    {
                        blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlog;