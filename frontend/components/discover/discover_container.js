import { connect } from "react-redux";
import Discover from './discover';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return ({
    discover: state.discover
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllUsers: () => { return dispatch(fetchAllUsers()); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
