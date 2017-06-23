import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import PhotosReducer from './photos_reducer';
import ModalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  photos: PhotosReducer,
  modal: ModalReducer
});

export default RootReducer;
