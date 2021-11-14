import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';

import { Action } from './slice';
import {
  getPhotoByIdRest,
  getPhotosRest,
  getRandomPhotoRest,
  getRelatedPhotosByIdRest,
} from '../../api';

function* getPhotos({ payload }) {
  const { photos } = yield select();
  const prevPhotos = photos.list;

  const result = yield call(getPhotosRest, payload);

  const nextPhotos = [
    ...prevPhotos,
    ...result,
  ];
  yield put(Action.Creators.setPhotos(nextPhotos));
}
function* getRandomPhoto({ payload }) {
  const result = yield call(getRandomPhotoRest, payload);
  yield put(Action.Creators.setRandomPhoto(result));
}
function* getPhotoById({ payload }) {
  const result = yield call(getPhotoByIdRest, payload);
  yield put(Action.Creators.setPhotoById({ id: payload, data: result }));
}
function* getRelatedPhotosById({ payload }) {
  const result = yield call(getRelatedPhotosByIdRest, payload);
  yield put(Action.Creators.setRelatedPhotoById({ id: payload, data: result }));
}
function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos),
    takeLatest(Action.Types.GET_RANDOM_PHOTOS, getRandomPhoto),
    takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoById),
    takeLatest(Action.Types.GET_RELATED_PHOTO_BY_ID, getRelatedPhotosById),
  ]);
}

export default saga;
