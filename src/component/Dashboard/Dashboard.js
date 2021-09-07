import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Dashboard = () => {
    const [manageServices, setManageServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-meadow-15734.herokuapp.com/blogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setManageServices(data))
    } , [])
    return (
        <div>
            <Header></Header>
            <div className="my-20 container mx-auto">
                <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="sidebar">
                        <ul>
                            <Link to="/addBlog">Add Blog</Link>
                            <Link to="/manageBlog">Manage Blog</Link>
                        </ul>
                    </div>
                    <div className="md:col-span-3 text-center text-4xl text-blue-800 font-bold">
                        <h1>Total Blog: {manageServices.length}</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;