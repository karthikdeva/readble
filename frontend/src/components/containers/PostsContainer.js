import { connect } from 'react-redux';
import PostsContainer from '../ui/PostsContainer';
import {
  fetchPosts,
  getCategories,
  setCategory,
  cancelEdit
} from '../../actions';

const mapStateToProps = (state, props) => ({
  category: props.match.params.category ? props.match.params.category : '',
  location: props.location && props.location.pathname,...state.reducer
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()), 
  getCategories: () => dispatch(getCategories()),
  setCategory: category => dispatch(setCategory(category)),
  cancelEdit: () => dispatch(cancelEdit())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
