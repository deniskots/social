import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./rootReducer";
import rootSaga from "./saga";
import {PostsState} from "./ducks/posts/contracts/state";
import {TagsState} from "./ducks/tags/contracts/state";
import {PostState} from "./ducks/post/contracts/state";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const sagaMiddleware = createSagaMiddleware();

export interface  RootState {
    posts: PostsState;
    tags: TagsState;
    post: PostState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);