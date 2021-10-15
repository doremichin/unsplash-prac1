import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';

import axios from 'axios';

import { Action } from './slice';
import { getTopicsRest, getTopicByIdRest } from '../../api';

function* getTopics({ type, payload }) {
  // 비동기 통신
  const result = yield call(getTopicsRest, payload);
  yield put(Action.Creators.setTopics(result));
}
function* getTopicById({ payload }) {
  const result = yield call(getTopicByIdRest, payload);
  yield put(Action.Creators.setTopicById(result));
}

function* saga() {
  yield all([
    takeLatest(Action.Types.GET_TOPICS, getTopics),
    takeLatest(Action.Types.GET_TOPIC_BY_ID, getTopicById),
  ]);
}

export default saga;
