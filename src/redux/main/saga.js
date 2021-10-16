import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { Action } from './slice';
import { getPhotosRest } from '../../api';

function* getPhotos({ payload }) {
  const result = yield call(getPhotosRest, payload);
  yield put(Action.Creators.setPhotos(result));
}

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos),
  ]);
}

export default saga;
