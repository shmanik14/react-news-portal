import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from "../../App";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Dashboard = () => {
    const [user, setUser] = useContext(userContext);
    const [manageServices, setManageServices] = useState([]);
    const [isAdmin, setIsAdmin] = useState({isAdmin : false});
    useEffect(() => {
        fetch('https://frozen-thicket-28551.herokuapp.com/blogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setManageServices(data))
    } , [])
    useEffect(() => {
        fetch(`http://localhost:4000/isAdmin/?email=${user.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
        .catch(err => console.log(err));
    } , [])
    return (
        <div>
            <Header></Header>
            
            <div className="my-20 container mx-auto">
                {
                    isAdmin.isAdmin ? (
                        <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="sidebar">
                                <ul>
                                    <Link to="/addBlog">Add Blog</Link>
                                    <Link to="/manageBlog">Manage Blog</Link>
                                    <Link to="/addAdmin">Add Admin</Link>
                                </ul>
                            </div>
                            <div className="md:col-span-3 text-center text-4xl text-blue-800 font-bold">
                                <h1>Total Blog: {manageServices.length}</h1>
                            </div>
                        </div>
                    ) : (
                        <h1>You Are not Admin ..... {isAdmin?.message}</h1>
                    )
                }
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;