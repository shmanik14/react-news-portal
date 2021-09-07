import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Sliders.css';

const Sliders = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-meadow-15734.herokuapp.com/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1
      };
    
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/blog/${id}`);
    }
    return (
        <div className="container mx-auto xs:grid-cols-1 md:grid grid-cols-3 gap-4 slider">
            <div class="md:col-span-2 slider-blog">
                <Slider {...settings}>
                {
                    blogs.slice(0, 3).map(blog =>
                    <div onClick={() => handleBook(blog._id)} className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">                   
                            <img src={blog.image} alt="Blog Avatar"/>
                        </div>
                        <div className="slider-blog-content">
                            <h2>{blog.title}</h2>
                            <p className="author"><span><FontAwesomeIcon icon={faUser} /></span> Jane Smith</p>
                            <ul className="slider-date">
                                <li><span><FontAwesomeIcon icon={faCalendarAlt} /></span> {blog.date}</li>
                                <li><span><FontAwesomeIcon icon={faClock} /></span> 2 min</li>
                            </ul>
                        </div>
                    </div>
                    )}
                </Slider>
            </div>
            <div className="trending-post">
                <h3 className="trending-title">Trending Posts</h3>
                <ul>
                    {
                        blogs.slice(0, 6).map(blog => <li key={blog._id}><a className="cursor-pointer" onClick={() => handleBook(blog._id)}>{blog.title}</a></li>)  
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sliders;