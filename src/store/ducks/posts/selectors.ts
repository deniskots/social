import {RootState} from "../../store";
import {LoadingState, PostsState} from "./contracts/state";
import {createSelector} from "reselect";

export const selectPosts = (state: RootState): PostsState => state.posts

export const selectPostsItems = createSelector(selectPosts, (posts) => posts.items)

export const selectLoadingState = (state: RootState): LoadingState => selectPosts(state).loadingState;

export const selectIsPostsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsPostsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

