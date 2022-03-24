import {LoadingState, PostsState} from "./contracts/state";
import {Action} from "redux";

export enum PostsActionsType {
    SET_POSTS = 'posts/SET_POSTS',
    FETCH_POSTS = 'posts/FETCH_POSTS',
    SET_LOADING_STATE = 'posts/SET_LOADING_STATE',
};

export interface SetPostsActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.SET_POSTS;
    payload: PostsState["items"];
};

export const setPosts = (payload: PostsState["items"]): SetPostsActionInterface => ({
    type: PostsActionsType.SET_POSTS,
    payload
});


export interface FetchPostsActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.FETCH_POSTS;

};

export const fetchPosts = (): FetchPostsActionInterface => ({
    type: PostsActionsType.FETCH_POSTS,
});


export interface setPostsLoadingStateInterface extends Action<PostsActionsType> {
    type: PostsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
};

export const setPostsLoadingState = (payload: LoadingState): setPostsLoadingStateInterface => ({
    type: PostsActionsType.SET_LOADING_STATE,
    payload
});



export type PostsActions = SetPostsActionInterface | setPostsLoadingStateInterface | FetchPostsActionInterface;

