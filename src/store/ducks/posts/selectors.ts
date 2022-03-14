import {RootState} from "../../store";
import {PostsState} from "./contracts/state";
import {createSelector} from "reselect";

export const selectPosts = (state: RootState): PostsState => state.posts

export const selectPostsItems = createSelector(selectPosts, (posts) => posts.items)

export const selectLoadingState = (state: RootState) => selectPosts(state).loadingState;

