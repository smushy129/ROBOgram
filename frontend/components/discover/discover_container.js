import { connect } from "react-redux";
import Discover from './discover';
import { fetchAllUsers } from '../../actions/user_actions';
import { createFollow } from '../../actions/follow_actions';

const mapStateToProps = (state) => {
  return ({
    discover: state.discover
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllUsers: () => { return dispatch(fetchAllUsers()); },
    createFollow: () => { return dispatch(createFollow()); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
