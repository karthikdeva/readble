import { connect } from "react-redux";
import PostCategories from "../ui/PostCategories";
import {  getCategories } from "../../actions";

const mapStateToProps = (state, props) => ({
  categories: state.reducer.categories
});

export default connect(mapStateToProps, { getCategories })(
  PostCategories
);
