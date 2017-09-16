import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import PhotoFeedReducer from './photo_feed_reducer';
import ModalReducer from './modal_reducer';
import PhotoDetailReducer from './photo_detail_reducer';
import SearchReducer from './search_reducer';
import DiscoverReducer from './discover_reducer';
import ErrorsReducer from './errorsReducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  photoFeed: PhotoFeedReducer,
  modal: ModalReducer,
  photoDetail: PhotoDetailReducer,
  searchBar: SearchReducer,
  discover: DiscoverReducer,
  errors: ErrorsReducer,
});

export default RootReducer;
