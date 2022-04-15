import {RootState} from "../../store";
import {AddFormState, LoadingState, PostsState} from "./contracts/state";


export const selectPostsState = (state: RootState): PostsState => state.posts;

export const selectPostsItems = (state: RootState) => selectPostsState(state).items;

export const selectLoadingState = (state: RootState): LoadingState => selectPostsState(state).loadingState;

export const selectIsPostsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsPostsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectAddFormState = (state: RootState): AddFormState => selectPostsState(state).addFormState;