import { connect } from 'react-redux';
import { sort } from '../../actions';
import SortOptions from '../ui/SortOptions';
const mapStateToProps = (state, props) => ({
  sortId: state.reducer.sort
});

const mapDispatchToProps = {
  sort
};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);
