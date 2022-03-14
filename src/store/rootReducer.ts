import {combineReducers} from 'redux';
import {postsReducer} from "./ducks/posts/reducer";


export const rootReducer = combineReducers({
    posts: postsReducer,
})