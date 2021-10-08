import {combineReducers} from "redux";
import appReducer from './app/slice';
import mainReducer from './main/slice';
import searchReducer from './search/slice';

const reducers = combineReducers({
    app : appReducer,
    main : mainReducer,
    search : searchReducer

})

export default reducers;