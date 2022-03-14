import {call, put, takeLatest} from 'redux-saga/effects'
import {PostsActionsType, setPosts, setPostsLoadingState} from "./actionCreators";
import {PostsApi} from "../../../services/api/postsApi";
import {LoadingState} from './contracts/state';

export function* fetchPostsRequest(): Generator<any, any, any> {
    try {
        const items = yield call(PostsApi.fetchPosts);
        yield put(setPosts(items));
    } catch (error) {
        yield put(setPostsLoadingState(LoadingState.ERROR))
    }
}

export function* postsSaga() {
    yield takeLatest(PostsActionsType.FETCH_POSTS, fetchPostsRequest)
}