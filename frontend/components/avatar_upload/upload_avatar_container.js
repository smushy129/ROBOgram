import { connect } from 'react-redux';
import UploadAvatar from './upload_avatar';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import { updateAvatar } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.user,
    ownProps
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: (component) => dispatch(openModal(component)),
    closeModal: () => dispatch(closeModal()),
    updateAvatar: (formData, id) => dispatch(updateAvatar(formData, id))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadAvatar));
