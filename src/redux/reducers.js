import { combineReducers } from 'redux';

import appReducer from './app/slice';
import photosReducer from './photos/slice';
import searchReducer from './search/slice';
import topicsReducer from './topics/slice';

const reducers = combineReducers({
  app: appReducer,
  photos: photosReducer,
  search: searchReducer,
  topics: topicsReducer,

});

export default reducers;
