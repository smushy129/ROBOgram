import { connect } from 'react-redux';
import UploadPhoto from './upload_photo';
import { uploadPhoto } from '../../actions/photo_detail_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return ({
    state
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    uploadPhoto: (photo) => { return dispatch(uploadPhoto(photo)); },
    closeModal: () => { return dispatch(closeModal()); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhoto);
