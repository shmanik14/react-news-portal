import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const ManageBlog = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
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

    const deleteBlog = (id) => {
        fetch(`https://desolate-meadow-15734.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted', result)
            alert('Blog Deleted Successfully')
            
        })
    }
    return (
        <div>
            <Header />
            <div className="mt-10 mb-10 container mx-auto">
            <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4">
                <div className="sidebar">
                    <ul>
                        <Link to="/addBlog">Add Blog</Link>
                        <Link to="/manageBlog">Manage Blog</Link>
                    </ul>
                </div>
                <div className="md:col-span-3">
                    <div className="table w-full p-2">
                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div className="flex items-center justify-center">
                                            Index
                                        </div>
                                    </th>
                                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div className="flex items-center justify-center">
                                            Blog Name
                                        </div>
                                    </th>
                                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div className="flex items-center justify-center">
                                            Action
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    manageServices.map((ms, index) => 
                                <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                                    <td className="p-2 border-r">{index}</td>
                                    <td className="p-2 border-r">{ms.title}</td>
                                    <td><p onClick={() => deleteBlog(ms._id)} className="cursor-pointer bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Delete</p></td>
                                
                                </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default ManageBlog;