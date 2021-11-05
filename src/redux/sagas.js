import { fork } from 'redux-saga/effects';

import popupSaga from './popup/saga';
import mainSaga from './photos/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';

function* sagas() {
  // yield all([fork(appSaga), fork(mainSaga), fork(searchSaga)])
  yield fork(popupSaga);
  yield fork(mainSaga);
  yield fork(searchSaga);
  yield fork(topicsSaga);
}

export default sagas;
