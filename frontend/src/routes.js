import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import AppHeader from './components/AppHeader'

import AddPost from './components/AddPost'
export default() => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <Route exact path='/' component={App}/>
                <Route path='/AddPost' component={AddPost}/>
            </div>
        </Router>
    )
}