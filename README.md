html css js > react > ts , test, next.js(우대사항) > 알고리즘


#Unsplash

unsplash 데모 사이트 입니다.

##Stack

React

Redux

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


Redux-saga

Axios

## Usages

```javascript
yarn start
```
