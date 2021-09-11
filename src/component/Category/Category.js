import { faFileAlt, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faAd, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
    return (
        <div className="blog-category">
            <div className="container mx-auto">
                <div className="px-3">
                    <h2 className="section-heading text-4xl pb-3 mb-3">Popular Category</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="sin-category text-center">
                        <p><span><FontAwesomeIcon icon={faFileAlt} /></span></p>
                        <h3><Link to="/categoryNews">International</Link></h3>
                    </div>                    
                    <div className="sin-category text-center">
                        <p><span><FontAwesomeIcon icon={faTasks} /></span></p>
                        <h3><Link to="/categoryNews">Sports</Link></h3>
                    </div>
                    <div className="sin-category text-center">
                        <p><span><FontAwesomeIcon icon={faAd} /></span></p>
                        <h3>Advertising</h3>
                    </div>
                    <div className="sin-category text-center">
                        <p><span><FontAwesomeIcon icon={faLightbulb} /></span></p>
                        <h3>Innovation</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;