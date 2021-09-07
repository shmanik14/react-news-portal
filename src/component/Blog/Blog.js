import React from 'react';
import { useHistory } from 'react-router-dom';

const Blog = ({blog}) => {
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/blog/${id}`);
    }
    return (
        <div className="sin-blog flex justify-between m-3">
            <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
                <img className="rounded-lg rounded-b-none" src={blog.image} alt="thumbnail" loading="lazy"/>
                <div className="flex justify-between -mt-4 px-4">
                    <span className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5" >Advertising</span >
                    <span className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-blue-500 font-semibold text-xs"> 6 Mins </p>
                    </span>
                </div>
                <div className="py-2 px-4">
                    <h1 className="text-xl font-medium leading-6 tracking-wide text-gray-300  hover:text-blue-500 cursor-pointer" >
                    <a onClick={() => handleBook(blog._id)}>{blog.title}</a> </h1>
                </div>
                <div className="px-4 space-y-2 pb-4">
                    <p className="text-gray-400 font-normal leading-5 tracking-wide">{blog.description.slice(0, 100)+'...'}</p>
                    <router-link onClick={() => handleBook(blog._id)} class="font-bold hover:text-blue-400 text-gray-100 cursor-pointer" >read more...</router-link>
                </div>                   
            </div>
        </div>
    );
};

export default Blog;