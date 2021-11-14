import { put, takeLatest } from 'redux-saga/effects';

import { Action } from './slice';
import { Action as photoAction } from '../photos/slice';

function* updatePopup({ payload }) {
  yield put(photoAction.Creators.getPhotoById(payload));
  yield put(photoAction.Creators.getRelatedPhotoById(payload));
}
function* saga() {
  yield takeLatest(Action.Types.UPDATE_POPUP, updatePopup);
}

export default saga;
