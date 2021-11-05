import { combineReducers } from 'redux';

import popupReducer from './popup/slice';
import photosReducer from './photos/slice';
import searchReducer from './search/slice';
import topicsReducer from './topics/slice';

const reducers = combineReducers({
  popup: popupReducer,
  photos: photosReducer,
  search: searchReducer,
  topics: topicsReducer,

});

export default reducers;
