

Unsplash
=================

unsplash 데모 사이트 입니다.

## Stack

### React

### Redux

* store
  * dispatch - 아래 참조
  * getState - 현재 store의 상태를 리턴한다
  * 생성
```javascript
const store = createStore(reducer);
```

* action 
  * plane object {}
  * type과 payload를 갖는다
 ```javascript
{ type: 'ACTION_NAME', payload : any }
```
* dispatch
  * function
  * 역할 - action을 reducer의 인자로 전달하여 실행한다.

* reducer 
  * function
  * 역할 - nextState 를 return 하여 store의 상태를 업데이트 한다.
```javascript
const reducer = (state, action) => {
    switch (action.type) {
        default : return state;
        case "ACTION_NAME" : {
            return {
                ...state,
                prop :action.payload
            }
        }
    }
}
```
<br/>

***

<br/>


### Redux-saga
- Generator 문법을 사용
<br/><br/>
- store에 saga를 미들웨어로 넣는다.
```javascript
//store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(sagaMiddleware), // redux-devtools 와 같이 사용중
));

sagaMiddleware.run(sagas);

export default store;

```
- sagas에서는 action을 모니터링하는 여러 saga를 모아서 store에 넣어준다.
```javascript
//sagas.js
import { fork } from 'redux-saga/effects';

import popupSaga from './popup/saga';
import mainSaga from './photos/saga';

function* sagas() {
  // yield all([fork(appSaga), fork(mainSaga),])  all을 사용하면 yield 사용을 줄일 수 있음
  yield fork(popupSaga);
  yield fork(mainSaga);
}

export default sagas;

```
- saga에서는 dispatch로 날린 action.type을 감지해서 메서드를 실행함. 
```javascript
//saga.js
import { takeLatest, call, put, all, select, } from 'redux-saga/effects'; // saga에서 사용할 수 있는 여러 기능들

import { Action } from './slice';
import {
  getPhotoByIdRest,
  getPhotosRest,
  getRandomPhotoRest,
  getRelatedPhotosByIdRest,
} from '../../api';

function* getPhotos({ payload }) {
  const { photos } = yield select(); // select는 useSelect 와 같은 기능을 함.
  const prevPhotos = photos.list;

  const result = yield call(getPhotosRest, payload); // call을 사용하면 getPhotosRest 함수에 payload를 인자로 넣어서 실행함.

  const nextPhotos = [   // 이전 data와 새로 요청 받아온 data를 합친다.
    ...prevPhotos,
    ...result,
  ];
  yield put(Action.Creators.setPhotos(nextPhotos)); // put은 dispatch와 같은 기능을 함.
}
function* getRandomPhoto({ payload }) {
  const result = yield call(getRandomPhotoRest, payload);
  yield put(Action.Creators.setRandomPhoto(result));
}
function* saga() {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, getPhotos),  // takeLatest는 마지막으로 발생된 리퀘스트의 응답만 처리함. 모든 리퀘스트를 처리하고 싶다면 takeEvery 사용.
    takeLatest(Action.Types.GET_RANDOM_PHOTOS, getRandomPhoto),
  ]);
}

export default saga;
```


### Axios
- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- Fetch API와 비교 했을 때 자동으로 JSON 데이터 변환을 해주고 polyfill 없이 여러 브라우저에 호환이 더 잘됨

```javascript
//getPhotoByIdRest.js
import axios from 'axios';

import { BASE_API_URL } from '../../const/config'; // 단순 url

export const getPhotoByIdRest = async (id) => {
  try {
    const { data } = await axios({  //axios는 요청하고 받은 결과의 데이터를 data로 담아오기 때문에 구조분해할당 해서 받아옴
      baseURL: BASE_API_URL,
      url: `/photos/${id}`,
      method: 'get',
      params: {
        client_id: process.env.REACT_APP_ACCESS_KEY,
      },
    });
    return data;
  } catch (err) {
    return err;
  }
};
```

