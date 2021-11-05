import {
  takeLatest, call, put,
} from 'redux-saga/effects';

import { Action } from './slice';
import { getPhotoByIdRest, getRelatedPhotosByIdRest } from '../../api';

function* getPhotoById({ payload }) {
  const result = yield call(getPhotoByIdRest, payload);
  yield put(Action.Creators.setPhotoById(result));
}
function* getRelatedPhotosById({ payload }) {
  const result = yield call(getRelatedPhotosByIdRest, payload);
  yield put(Action.Creators.setRelatedPhotoById(result));
}
function* saga() {
  yield takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoById);
  yield takeLatest(Action.Types.GET_RELATED_PHOTO_BY_ID, getRelatedPhotosById);
}

export default saga;
