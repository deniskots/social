import { all } from "redux-saga/effects";
import {postsSaga} from "./ducks/posts/sagas";


export default function* rootSaga() {
    yield all([postsSaga()]);
}