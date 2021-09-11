import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/daily-dose-logo.png';
import firebaseConfig from '../Login/firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Header = () =>  {
  const [user, setUser] = useContext(userContext);
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({}); 
        sessionStorage.removeItem('email'); 
        sessionStorage.removeItem('name'); 
        sessionStorage.removeItem('photo'); 
        sessionStorage.removeItem('token'); 
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Popover className="z-50 relative bg-white">
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={logo}
                    alt="Daily Dose"
                  />
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/">Home</Link>
                <Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/about">About</Link>
                <Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/contact">Contact</Link>
                <Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/dashboard">Dashboard</Link>
              </Popover.Group>
              
              
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {
                  user.email ? <Link className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={signOut}>Log Out</Link> : <Link className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" to="/login">Login</Link>
              }
              </div>
              
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Home</Link>
                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/about">About</Link>
                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/contact">Contact</Link>   
                    <Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/dashboard">Dashboard</Link>                
                  </div>
                  <div>
                  {
                  user.email ? <Link className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={signOut}>Log Out</Link> : <Link className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" to="/login">Login</Link>
                  }
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}
export default Header;