import { all } from "redux-saga/effects";
import {postsSaga} from "./ducks/posts/sagas";
import {tagsSaga} from "./ducks/tags/sagas";
import {postSaga} from "./ducks/post/sagas";


export default function* rootSaga() {
    yield all([postsSaga(), tagsSaga(), postSaga()]);
}