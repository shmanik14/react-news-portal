import { faFileAlt, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faAd, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Category.css';

const Category = () => {
    return (
        <div className="blog-category">
            <div className="container mx-auto grid md:grid-cols-4 gap-4">
                <div className="sin-category text-center">
                    <p><span><FontAwesomeIcon icon={faFileAlt} /></span></p>
                    <h3>Case Studies</h3>
                </div>
                <div className="sin-category text-center">
                    <p><span><FontAwesomeIcon icon={faAd} /></span></p>
                    <h3>Advertising</h3>
                </div>
                <div className="sin-category text-center">
                    <p><span><FontAwesomeIcon icon={faLightbulb} /></span></p>
                    <h3>Innovation</h3>
                </div>
                <div className="sin-category text-center">
                    <p><span><FontAwesomeIcon icon={faTasks} /></span></p>
                    <h3>Management</h3>
                </div>
            </div>
        </div>
    );
};

export default Category;