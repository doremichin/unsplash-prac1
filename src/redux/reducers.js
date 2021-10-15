import { combineReducers } from 'redux';

import appReducer from './app/slice';
import mainReducer from './main/slice';
import searchReducer from './search/slice';
import topicsReducer from './topics/slice';

const reducers = combineReducers({
  app: appReducer,
  main: mainReducer,
  search: searchReducer,
  topics: topicsReducer,

});

export default reducers;
