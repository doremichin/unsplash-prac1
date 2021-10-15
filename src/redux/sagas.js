import { fork, all } from 'redux-saga/effects';

import appSaga from './app/saga';
import mainSaga from './main/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';

function* sagas() {
  yield all([
    fork(appSaga),
    fork(mainSaga),
    fork(searchSaga),
    fork(topicsSaga),
  ]);
}

export default sagas;
