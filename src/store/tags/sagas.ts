import {call, put, takeLatest} from 'redux-saga/effects'
import {LoadingState} from './contracts/state';
import {setTags, setTagsLoadingState, TagsActionsType} from "./actionCreators";
import { TagsApi } from '../../services/api/tagsApi';

export function* fetchTagsRequest(): Generator<any, any, any> {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items));
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}