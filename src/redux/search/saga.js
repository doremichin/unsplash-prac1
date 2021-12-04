import {
  put, call, takeLatest, select, takeEvery,
} from 'redux-saga/effects';

import { Action } from './slice';
import {
  searchNextResultsRest,
  searchResultsRest,
} from '../../api';

function* getSearchResults({ payload }) {
  const result = yield call(searchResultsRest, payload);
  yield put(Action.Creators.setSearchResults(result));
}

function* searchNextResults({ payload }) {
  const { search } = yield select();
  const { searchType, params } = payload;

  const prevUsers = search[searchType];
  const result = yield call(searchNextResultsRest, searchType, params);

  const data = {
    ...prevUsers,
    results: [
      ...prevUsers.results,
      ...result.results,
    ],
  };
  yield put(Action.Creators.setNextResults({ searchType, data }));
}

function* saga() {
  yield takeEvery(Action.Types.GET_SEARCH_RESULTS, getSearchResults);
  yield takeLatest(Action.Types.SEARCH_NEXT_RESULTS, searchNextResults);
}

export default saga;
