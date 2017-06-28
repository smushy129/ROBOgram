import { connect } from 'react-redux';
import UploadPhoto from './upload_photo';
import { withRouter } from 'react-router';
import { uploadPhoto } from '../../actions/photo_detail_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    uploadPhoto: (photo, callback) => { return dispatch(uploadPhoto(photo, callback)); },
    closeModal: () => { return dispatch(closeModal()); },
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhoto));
