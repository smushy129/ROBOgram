import EditUser from './edit_user';
import { connect } from 'react-redux';
import { updateUser, fetchSingleUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
