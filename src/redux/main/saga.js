import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { Action } from './slice';
import { getPhotosRest, getRandomPhotoRest } from '../../api';

function* getPhotos({ payload }) {
  const result = yield call(getPhotosRest, payload);
  yield put(Action.Creators.setPhotos(result));
}
function* getRandomPhoto({ payload }) {
  const result = yield call(getRandomPhotoRest, payload);
  yield put(Action.Creators.setRandomPhoto(result));
}

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos),
    takeLatest(Action.Types.GET_RANDOM_PHOTOS, getRandomPhoto),
  ]);
}

export default saga;
