import { connect } from 'react-redux';
import AddComment from '../ui/AddComment';
import { addComment } from '../../actions';

const mapStateToProps = (state, props) => ({
  postId: state.reducer.post && state.reducer.post.id
});

const mapDispatchToProps = { addComment };

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
