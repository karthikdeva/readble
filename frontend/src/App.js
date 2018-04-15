import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from './components/Posts'
import * as api from './api/api'
import Categories from './components/Categories'
import * as FontAwesome from 'react-icons/lib/fa'
import {Link} from 'react-router-dom';
import {filterPostSByPostType, getPostList, getAllCategories} from './actions/index'

class App extends Component {

  state = {
    categories: [],
    selectedPostType: "SHOW_ALL_POSTS"
  }
  componentDidMount() {
    api
      .getAllPosts()
      .then(data => {
        this
          .props
          .postList(data);
        this
          .props
          .filterByPostType(data, this.state.selectedPostType);
      });
    api
      .getAllCategories()
      .then(data => {
        this
          .props
          .getAllCategories(data.categories)
      });

  }
  onChange = (val) => {
    this
      .props
      .filterByPostType(this.props.posts, val);
  }

  render() {

    const {displayPosts} = this.props;
    return (

      <div className="container">
        <div className="row justify-content-between">
          <Categories
            className="col-6"
            categories={this.props.categories}
            onChange={this.onChange}></Categories>
          <Link className="btn btn-primary float-right" to="addPost">
            <FontAwesome.FaPlus size={20}/>
            Add a post</Link>
        </div>
        <div className="row">
          {Object
            .keys(displayPosts)
            .length !== 0 && <Post posts={displayPosts}></Post>}
          {(Object.keys(displayPosts) === 0 || !displayPosts.length) && <p className="mt-5 w-100 text-center alert alert-info">!No Post found.</p>}

        </div>
      </div>

    );
  }
}

const mapStateToProps = ({reducer}) => {
  const {getPostList, posts, getAllCategories} = reducer;
  return {posts: getPostList, displayPosts: posts, categories: getAllCategories}

};

const mapDispatchToProps = dispatch => ({
  postList: (data) => {
    dispatch(getPostList(data))
  },
  getAllCategories: (data) => {
    dispatch(getAllCategories(data))
  },
  filterByPostType: (data, postType) => {
    dispatch(filterPostSByPostType(data, postType))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);