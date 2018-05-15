import { connect } from 'react-redux';
import Comment from '../ui/Comment';
import {
  upVoteComment,
  downVoteComment,
  deleteComment,
  editComment
} from '../../actions';

const mapStateToProps = (state, props) => ({
  comment: props.comment,
  edit:
    state.reducer.editComment && state.reducer.editComment.id === props.comment.id
      ? true
      : false
});

const mapDispatchToProps = {
  upVoteComment,
  downVoteComment,
  deleteComment,
  editComment
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
