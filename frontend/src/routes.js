import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import AddPost from './components/AddPost'
export default() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/> 
                <Route  path='/AddPost' component={AddPost}/> 
            </Switch>
        </BrowserRouter>
    )
}