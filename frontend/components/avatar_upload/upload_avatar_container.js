import { connect } from 'react-redux';
import UploadAvatar from './upload_avatar';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    ownProps
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: (component) => dispatch(openModal(component)),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadAvatar));
