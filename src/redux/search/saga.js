import { put, call, takeLatest } from 'redux-saga/effects';

import { Action } from './slice';
import { searchPhotosRest } from '../../api';

function* searchPhotos({ payload }) {
  const result = yield call(searchPhotosRest, payload);
  yield put(Action.Creators.setSearchResults(result));
}

function* saga() {
  yield takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotos);
}

export default saga;
