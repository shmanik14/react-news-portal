import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import BlogDetails from './component/BlogDetails/BlogDetails';
import CategoryBlog from './component/Category/CategoryBlog';
import AddAdmin from './component/Dashboard/AddAdmin/AddAdmin';
import AddBlog from './component/Dashboard/AddBlog/AddBlog';
import Dashboard from './component/Dashboard/Dashboard';
import ManageBlog from './component/Dashboard/ManageBlog/ManageBlog';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>                      
            <Route path="/categoryNews">
              <CategoryBlog />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/news/:id">
              <BlogDetails />
            </PrivateRoute> 
            <PrivateRoute path="/addBlog">
              <AddBlog />
            </PrivateRoute> 
            <PrivateRoute path="/manageBlog">
              <ManageBlog />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>           
            <PrivateRoute path="/addAdmin">
              <AddAdmin />
            </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
