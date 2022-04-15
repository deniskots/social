import {call, put, takeLatest} from 'redux-saga/effects'
import {addPost, setAddFormState, setPosts, setPostsLoadingState} from "./actionCreators";
import {PostsApi} from "../../../services/api/postsApi";
import {AddFormState, LoadingState} from './contracts/state';
import {FetchAddPostActionInterface, PostsActionsType} from './contracts/ActionTypes';

export function* fetchPostsRequest(): Generator<any, any, any> {
    try {
        const items = yield call(PostsApi.fetchPosts);
        yield put(setPosts(items));
    } catch (error) {
        yield put(setPostsLoadingState(LoadingState.ERROR))
    }
};

export function* fetchAddPostRequest({payload: text}: FetchAddPostActionInterface): Generator<any, any, any> {
    try {
        const item = yield call(PostsApi.addPost,text);
        yield put(addPost(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* postsSaga() {
    yield takeLatest(PostsActionsType.FETCH_POSTS, fetchPostsRequest);
    yield takeLatest(PostsActionsType.FETCH_ADD_POST, fetchAddPostRequest);

}