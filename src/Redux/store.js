import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducers from "./rootReducer";

const middleware = [thunk];

let store = createStore(rootReducers, applyMiddleware(...middleware));

export default store