import {combineReducers} from 'redux';
import {postsReducer} from "./ducks/posts/reducer";
import {tagsReducer} from "./ducks/tags/reducer";
import {postReducer} from "./ducks/post/reducer";


export const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    tags: tagsReducer,

})