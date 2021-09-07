import React from 'react';
import Category from '../Category/Category';
import FeaturedBlog from '../FeaturedBlog/FeaturedBlog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sliders from '../Sliders/Sliders';

const Home = () => {
    return (
        <div>
            <Header />
            <Sliders />
            <Category />
            <FeaturedBlog />
            <Footer />
        </div>
    );
};

export default Home;