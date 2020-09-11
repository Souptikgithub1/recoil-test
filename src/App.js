import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home';
import AddPost from './components/AddPost';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/add-post',
    component: AddPost
  }
]

const App = () => {

  

  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-post">Add Post</Link></li>
        </ul>
        {routes.map(route => (
              <Route key={route.path} {...route} exact />
            ))
        }
        
      </div>
    </Router>
  );
}

export default App;
