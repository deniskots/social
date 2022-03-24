import {combineReducers} from 'redux';
import {postsReducer} from "./ducks/posts/reducer";
import {tagsReducer} from "./tags/reducer";


export const rootReducer = combineReducers({
    posts: postsReducer,
    tags: tagsReducer,
})