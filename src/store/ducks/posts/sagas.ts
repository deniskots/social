import {call, put, takeLatest} from 'redux-saga/effects'
import {addPost, FetchAddPostActionInterface, PostsActionsType, setPosts, setPostsLoadingState} from "./actionCreators";
import {PostsApi} from "../../../services/api/postsApi";
import {LoadingState, Post} from './contracts/state';

export function* fetchPostsRequest(): Generator<any, any, any> {
    try {
        const items = yield call(PostsApi.fetchPosts);
        yield put(setPosts(items));
    } catch (error) {
        yield put(setPostsLoadingState(LoadingState.ERROR))
    }
};

export function* fetchAddPostRequest({payload}:FetchAddPostActionInterface): Generator<any, any, any> {
    try {
        const data: Post = {
            _id: Math.random().toString(36).substr(1),
            text: payload,
            user: {
                fullname: "Jessy Pimpknan",
                username: "Bitch",
                avatarUrl: "https://picsum.photos/400"
            },
        };
        const item = yield call(PostsApi.addPost, data);
        yield put(addPost(item));
    } catch (error) {
        yield put(setPostsLoadingState(LoadingState.ERROR))
    }
}

export function* postsSaga() {
    yield takeLatest(PostsActionsType.FETCH_POSTS, fetchPostsRequest);
    yield takeLatest(PostsActionsType.FETCH_ADD_POST, fetchAddPostRequest);
}