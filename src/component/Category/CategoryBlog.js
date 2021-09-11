import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from './News';

const CategoryBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-thicket-28551.herokuapp.com/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <>
        <Header />
        <div className="container mx-auto categoryNews">
            <div className="grid md:grid-cols-3 gap-1">
                {
                    blogs.map(blog => <News key={blog._id} blog={blog}></News>)  
                }
            </div>
        </div>
        <Footer />
        </>
    );
};

export default CategoryBlog;