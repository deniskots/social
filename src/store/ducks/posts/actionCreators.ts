import {AddFormState, LoadingState, Post, PostsState} from "./contracts/state";
import {
    AddPostActionInterface,
    FetchAddPostActionInterface,
    FetchPostsActionInterface, PostsActionsType, setAddFormStateActionInterface,
    SetPostsActionInterface,
    setPostsLoadingStateInterface
} from "./contracts/ActionTypes";



export const setPosts = (payload: PostsState["items"]): SetPostsActionInterface => ({
    type: PostsActionsType.SET_POSTS,
    payload
});

export const fetchPosts = (): FetchPostsActionInterface => ({
    type: PostsActionsType.FETCH_POSTS,
});

export const setPostsLoadingState = (payload: LoadingState): setPostsLoadingStateInterface => ({
    type: PostsActionsType.SET_LOADING_STATE,
    payload
});

export const setAddFormState = (payload: AddFormState): setAddFormStateActionInterface => ({
    type: PostsActionsType.SET_ADD_FORM_STATE,
    payload
});

export const fetchAddPost = (payload: string): FetchAddPostActionInterface => ({
    type: PostsActionsType.FETCH_ADD_POST,
    payload
});

export const addPost = (payload: Post): AddPostActionInterface => ({
    type: PostsActionsType.ADD_POST,
    payload
});

export type PostsActions = SetPostsActionInterface
    | setPostsLoadingStateInterface
    | FetchPostsActionInterface
    | FetchAddPostActionInterface
    | AddPostActionInterface
    | setAddFormStateActionInterface



