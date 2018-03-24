import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as api from './api/api'
import AppHeader from './components/AppHeader'
import Post from './components/Posts'
import Categories from './components/Categories'
import * as FontAwesome from 'react-icons/lib/fa'
import {Link} from 'react-router-dom';
import {filterPostSByPostType} from './actions/index'

class App extends Component {

  state = {
    posts: [],
    displayPosts: [],
    categories: []
  }
  componentDidMount() {
    api
      .getAllCategories()
      .then(data => {
        this.setState((state) => ({categories: data.categories}))
      })
    api
      .getAllPosts()
      .then(data => {
        this.setState((state) => ({posts: data, displayPosts: data}))
      })
  }
  onChange = (val) => {
    this
      .props
      .dispatch(filterPostSByPostType(this.state.posts, val));
  }

  render() {
    return (
      <div className="app">
        <AppHeader/>
        <div className="container">
          <div className="row justify-content-between">
            <Categories
              className="col-6"
              categories={this.state.categories}
              onChange={this.onChange}></Categories>
            <Link className="btn btn-primary float-right" to="addPost">
              <FontAwesome.FaPlus size={20}/>
              Add a post</Link>
          </div>
          <div className="row">
            <Post posts={this.state.displayPosts}></Post>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterPostSByPostType: (data) => dispatch(filterPostSByPostType(data))
   
  }
}

export default connect(mapDispatchToProps)(App);
