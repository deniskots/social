import {LoadingState, PostState} from "./contracts/state";
import {
    FetchPostDataActionInterface,
    PostActionsType,
    SetPostDataActionInterface,
    setPostLoadingStateInterface
} from "./contracts/actionTypes";

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

