import {call, put, takeLatest} from 'redux-saga/effects'
import {LoadingState} from './contracts/state';
import {setPostData, setPostLoadingState,} from "./actionCreators";
import {FetchPostDataActionInterface, PostActionsType} from "./contracts/actionTypes";
import {PostsApi} from "../../../services/api/postsApi";
import {Post} from "../posts/contracts/state";

export function* fetchPostDataRequest({payload: postId}:FetchPostDataActionInterface): Generator<any, any, any> {
    try {
        const data: Post = yield call(PostsApi.fetchPostData, postId);
        yield put(setPostData(data));
    } catch (error) {
        yield put(setPostLoadingState(LoadingState.ERROR))
    }
}

export function* postSaga() {
    yield takeLatest(PostActionsType.FETCH_POST_DATA, fetchPostDataRequest)
}