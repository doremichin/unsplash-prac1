import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { Action } from './slice';
import { getTopicByIdRest, getTopicsRest } from '../../api';

function* getTopics({ payload }) {
  // 비동기 통신
  const result = yield call(getTopicsRest, payload);
  yield put(Action.Creators.setTopics(result));
}
function* getTopicById({ payload }) {
  // 비동기 통신
  const result = yield call(getTopicByIdRest, payload);
  yield put(Action.Creators.setTopicById(result));
}

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_TOPICS, getTopics),
    takeLatest(Action.Types.GET_TOPICS_BY_ID, getTopicById),
  ]);
}
export default saga;
