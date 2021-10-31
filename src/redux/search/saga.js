import {
  put, call, takeLatest, select,
} from 'redux-saga/effects';

import { Action } from './slice';
import { searchPhotosRest } from '../../api';

function* searchPhotos({ payload }) {
  const result = yield call(searchPhotosRest, payload);
  yield put(Action.Creators.setSearchResults(result));
}
function* getNextPhotos({ payload }) {
  const { search } = yield select();
  const result = yield call(searchPhotosRest, payload);

  const nextResult = {
    ...result,
    photos: {
      total: result.photos.total,
      total_pages: result.photos.total_pages,
      results: [
        ...search.photos.results,
        ...result.photos.results,
      ],
    },
    users: {
      total: result.users.total,
      total_pages: result.users.total_pages,
      results: [
        ...search.users.results,
        ...result.users.results,
      ],
    },
    collections: {
      total: result.collections.total,
      total_pages: result.collections.total_pages,
      results: [
        ...search.collections.results,
        ...result.collections.results,
      ],
    },
  };

  yield put(Action.Creators.setNextSearchPhotos(nextResult));
}

function* saga() {
  yield takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotos);
  yield takeLatest(Action.Types.GET_NEXT_SEARCH_PHOTOS, getNextPhotos);
}

export default saga;
