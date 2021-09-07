import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
            <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
               
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div class="text-xl uppercase text-gray-400 font-medium mb-6">
                        About Us
                    </div>             
                    <p className="text-sm block text-gray-300 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima veritatis dicta praesentium doloribus quos sit ipsa, illum, tenetur recusandae quasi maxime et velit quo iusto.</p>
                </div>

               
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    
                    <div class="text-xl uppercase text-gray-400 font-medium mb-6">
                        Quick Links
                    </div>

                    
                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Contact Us
                    </p>
                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        About Us
                    </p>
                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Blog
                    </p>
                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Category
                    </p>
                </div>

                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div class="text-xl uppercase text-gray-400 font-medium mb-6">
                        Categories
                    </div>

                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Advertising
                    </p>
                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Innovation
                    </p>
                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Case Studies
                    </p>
                    <p class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Management
                    </p>
                </div>

                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div class="text-xl uppercase text-gray-400 font-medium mb-6">
                        Contact Us
                    </div>
                    <p className="text-sm block text-gray-300 font-medium mb-4"><span className="pr-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> 256, 1st AVE, Manchester 125 , Noth England</p>
                    <p className="text-sm block text-gray-300 font-medium mb-4"><span className="pr-2"><FontAwesomeIcon icon={faEnvelope} /></span> info@example.com</p>
                    <p className="text-sm block text-gray-300 font-medium mb-4"><span className="pr-2"><FontAwesomeIcon icon={faPhone} /></span> +88 (012) 356 958 45</p>
                    
                </div>
            </div>

            <div class="pt-2">
                <div class="flex pb-5 px-3 m-auto pt-5 
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl">
                    <div class="mt-2">
                        © Copyright 2021. All Rights Reserved.
                    </div>

                    <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <p className="text-lg block text-gray-300 font-medium mb-4"><span className="px-2"><FontAwesomeIcon icon={faYoutube} /></span> </p>
                        <p className="text-lg block text-gray-300 font-medium mb-4"><span className="px-2"><FontAwesomeIcon icon={faInstagram} /></span> </p>
                        <p className="text-lg block text-gray-300 font-medium mb-4"><span className="px-2"><FontAwesomeIcon icon={faTwitter} /></span> </p>
                        <p className="text-lg block text-gray-300 font-medium mb-4"><span className="px-2"><FontAwesomeIcon icon={faFacebookF} /></span> </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;