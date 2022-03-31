import {LoadingState, PostState} from "./contracts/state";

import { Post } from "../posts/contracts/state";
import {
    FetchPostDataActionInterface,
    SetPostDataActionInterface,
    setPostLoadingStateInterface
} from "./contracts/actionTypes";

export enum PostActionsType {
    SET_POST_DATA = 'post/SET_POST_DATA',
    FETCH_POST_DATA = 'post/FETCH_POST_DATA',
    SET_LOADING_STATE = 'post/SET_LOADING_STATE',
};


export const setPostData = (payload: PostState['data']): SetPostDataActionInterface => ({
    type: PostActionsType.SET_POST_DATA,
    payload
});

export const fetchPostData = (payload:string): FetchPostDataActionInterface=> ({
    type: PostActionsType.FETCH_POST_DATA,
    payload
});


export const setPostLoadingState = (payload: LoadingState): setPostLoadingStateInterface => ({
    type: PostActionsType.SET_LOADING_STATE,
    payload
});



export type PostActions = SetPostDataActionInterface | setPostLoadingStateInterface | FetchPostDataActionInterface;

