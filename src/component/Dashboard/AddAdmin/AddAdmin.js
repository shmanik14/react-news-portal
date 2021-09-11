import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const AddAdmin = () => {
    const [user, setUser] = useContext(userContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const adminData = {
            email: data.email
        }
        const url = `http://localhost:4000/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => {
            console.log('server');
            alert('Admin Added Sucessfully')
        })
    };
    return (
        <div>
            <Header />
            <div className="mt-10 mb-10 container mx-auto">
            <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4">
                <div className="sidebar">
                    <ul>
                        <Link to="/addBlog">Add Blog</Link>
                        <Link to="/manageBlog">Manage Blog</Link>
                        <Link to="/addAdmin">Add Admin</Link>
                    </ul>
                </div>
                <div className="px-5 md:col-span-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="pb-3 block text-sm font-medium text-gray-700" htmlFor="email">Admin Email</label>
                            <input className="block w-full text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" name="email" placeholder="Admin Email" {...register("email")} />
                            <br/> 
                            <input className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit" />
                    </form> 
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddAdmin;