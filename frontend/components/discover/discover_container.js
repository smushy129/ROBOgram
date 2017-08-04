import { connect } from "react-redux";
import Discover from './discover';
import { fetchNotFollowedUsers } from '../../actions/user_actions';
import { createFollow } from '../../actions/follow_actions';

const mapStateToProps = (state) => {
  return ({
    discover: state.discover,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchNotFollowedUsers: () => { return dispatch(fetchNotFollowedUsers()); },
    createFollow: (userId) => { return dispatch(createFollow(userId)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
