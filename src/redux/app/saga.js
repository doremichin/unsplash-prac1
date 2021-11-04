import {
  takeLatest, call, put,
} from 'redux-saga/effects';

import { Action } from './slice';
import { getPhotoByIdRest } from '../../api';

function* getPhotoById({ payload }) {
  console.log(payload);
  const result = yield call(getPhotoByIdRest, payload);
  yield put(Action.Creators.setPhotoById(result));
}

function* saga() {
  yield takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoById);
}

export default saga;
