import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`https://frozen-thicket-28551.herokuapp.com/blog/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [id])

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-thicket-28551.herokuapp.com/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/blog/${id}`);
    }
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <div className="mt-20 mb-20 grid xs:grid-cols-1 md:grid-cols-3 gap-5">
                    <div class="px-3 md:col-span-2">
                        <img className="w-full pb-10" src={blog.image} alt=""/>
                        
                        <div className="sin-blog-content">
                            <ul className="slider-date">
                                <li><span><FontAwesomeIcon icon={faCalendarAlt} /></span> {blog.date}</li>
                                <li><span><FontAwesomeIcon icon={faUser} /></span> {blog.author}</li>
                                <li><span><FontAwesomeIcon icon={faClock} /></span> 2 min</li>
                            </ul>
                        </div>
                        <h1 className="pb-6 text-xl font-medium leading-6 tracking-wide text-black-600">{blog.title}</h1>
                        <p className="detail-des">{blog.description}</p>
                    </div>
                    <div className="trending-post">
                        <h3 className="trending-title">Latest Posts</h3>
                        <ul>
                            {
                                blogs.slice(0, 10).map(blog => <li key={blog._id}><a className="cursor-pointer" onClick={() => handleBook(blog._id)}>{blog.title}</a></li>)  
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;