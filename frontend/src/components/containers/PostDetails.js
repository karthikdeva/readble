import {connect} from 'react-redux';
import PostDetails from '../ui/PostDetails';
import {
  fetchPosts,
  upVotePost,
  downVotePost,
  editPost,
  deletePost,
  fetchPost,
  clearPost
} from '../../actions';

const mapStateToProps = (state, props) => ({
  postId: props.match.params.id,
  post: props.post
    ? props.post
    : state.reducer.post,
  editPost: state.reducer.editPost
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  upvote: postId => dispatch(upVotePost(postId)),
  downvote: postId => dispatch(downVotePost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  onEditPost: post => dispatch(editPost(post)),
  fetchPost: post => dispatch(fetchPost(post)),
  clearPost: () => dispatch(clearPost())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
