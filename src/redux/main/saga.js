import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';

import axios from 'axios';

import { Action } from './slice';
import { getPhotosRest } from '../../api';

function* getPhotos({ type, payload }) {
  // 비동기 통신
  const result = yield call(getPhotosRest, payload);
  yield put(Action.Creators.setPhotos(result));
}

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos),
  ]);
}

export default saga;
