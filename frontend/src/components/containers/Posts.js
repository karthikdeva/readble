import {connect} from "react-redux";
import Posts from "../ui/Posts";
import {fetchPosts, upVotePost, downVotePost, editPost, deletePost} from "../../actions";

const getSortedPosts = state => {
  const {category, posts, sort} = state.reducer;
  let filteredPosts = category === "all"
    ? posts
    : posts.filter(post => post.category === category);
  const sortId = parseInt(sort, 10);
  if (filteredPosts) {
    switch (sortId) {
      case 0:
        return filteredPosts.sort((a, b) => a.timestamp - b.timestamp);
      case 1:
        return filteredPosts.sort((a, b) => b.timestamp - a.timestamp);
      case 2:
        return filteredPosts.sort((a, b) => a.voteScore - b.voteScore);
      case 3:
        return filteredPosts.sort((a, b) => b.voteScore - a.voteScore);
      default:
        return filteredPosts;
    }
  }
  return filteredPosts;
};

const mapStateToProps = (state, props) => ({
  posts: getSortedPosts(state),
  ...state.reducer
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  upvote: postId => dispatch(upVotePost(postId)),
  downvote: postId => dispatch(downVotePost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  onEditPost: post => dispatch(editPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
