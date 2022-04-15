import {createSelector} from "reselect";
import {RootState} from "../../store";
import {PostState, LoadingState} from "./contracts/state";

export const selectPost = (state: RootState): PostState => state.post;

export const selectPostItems = createSelector(selectPost, (posts) => posts.data);

export const selectLoadingState = (state: RootState): LoadingState => selectPost(state).loadingState;

export const selectIsPostLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsPostLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectPostData = (state: RootState): PostState['data'] => selectPost(state).data;


