import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';

import { Action } from './slice';
import { getTopicByIdRest, getTopicPhotosRest, getTopicsRest } from '../../api';

function* getTopics({ payload }) {
  const result = yield call(getTopicsRest, payload);
  yield put(Action.Creators.setTopics(result));
}
function* getTopicsById({ payload }) {
  const result = yield call(getTopicByIdRest, payload);
  yield put(Action.Creators.setTopicById(result));
}
function* getTopicPhotos({ payload }) {
  const result = yield call(getTopicPhotosRest, payload);
  yield put(Action.Creators.setTopicPhotos(result));
}
function* getNextTopicPhotos({ payload }) {
  const { topics } = yield select();
  const prevPhotos = topics.photos;
  const result = yield call(getTopicPhotosRest, payload);

  const nextResult = [
    ...prevPhotos,
    ...result,
  ];

  yield put(Action.Creators.setNextTopicPhotos(nextResult));
}
function* saga() {
  yield all([
    takeLatest(Action.Types.GET_TOPICS, getTopics),
    takeLatest(Action.Types.GET_TOPIC_BY_ID, getTopicsById),
    takeLatest(Action.Types.GET_TOPIC_PHOTOS, getTopicPhotos),
    takeLatest(Action.Types.GET_NEXT_TOPIC_PHOTOS, getNextTopicPhotos),

  ]);
}

export default saga;
