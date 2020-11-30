import {combineReducers} from 'redux';
import postsReducer from './Blog/Posts/Posts.reducer';
import userReducer from "./Blog/User/User.reducer";


export default combineReducers({
    posts: postsReducer,
    users: userReducer
})