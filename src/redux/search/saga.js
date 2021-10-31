import {
  put, call, takeLatest, select,
} from 'redux-saga/effects';

import { Action } from './slice';
import {
  nextCollectionsResultsRest,
  nextPhotosResultsRest,
  nextUsersResultsRest,
  searchResultsRest,
} from '../../api';

function* getSearchResults({ payload }) {
  const result = yield call(searchResultsRest, payload);
  yield put(Action.Creators.setSearchResults(result));
}
function* getNextPhotos({ payload }) {
  const { search } = yield select();

  const prevPhotos = search.photos;
  const result = yield call(nextPhotosResultsRest, payload);

  const nextResult = {
    ...prevPhotos,
    results: [
      ...prevPhotos.results,
      ...result.results,
    ],
  };

  yield put(Action.Creators.setNextPhotos(nextResult));
}
function* getNextCollections({ payload }) {
  const { search } = yield select();
  const prevCollections = search.collections;
  const result = yield call(nextCollectionsResultsRest, payload);

  const nextResult = {
    ...prevCollections,
    results: [
      ...prevCollections.results,
      ...result.results,
    ],
  };

  yield put(Action.Creators.setNextCollections(nextResult));
}
function* getNextUsers({ payload }) {
  const { search } = yield select();
  const prevUsers = search.users;
  const result = yield call(nextUsersResultsRest, payload);

  const nextResult = {
    ...prevUsers,
    results: [
      ...prevUsers.results,
      ...result.results,
    ],
  };
  yield put(Action.Creators.setNextUsers(nextResult));
}

function* saga() {
  yield takeLatest(Action.Types.GET_SEARCH_RESULTS, getSearchResults);
  yield takeLatest(Action.Types.GET_NEXT_PHOTOS, getNextPhotos);
  yield takeLatest(Action.Types.GET_NEXT_COLLECTIONS, getNextCollections);
  yield takeLatest(Action.Types.GET_NEXT_USERS, getNextUsers);
}

export default saga;
