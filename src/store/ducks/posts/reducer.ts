import produce, {Draft} from 'immer';
import {LoadingState, PostsState} from "./contracts/state";
import {PostsActions, PostsActionsType} from "./actionCreators";

const initialPostsState: PostsState = {
    items: [],
    loadingState: LoadingState.NEVER
};

export const postsReducer = produce((draft: Draft<PostsState>, action: PostsActions) => {
    switch (action.type) {
        case PostsActionsType.SET_POSTS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        case PostsActionsType.FETCH_POSTS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;
        case PostsActionsType.ADD_POST:
            draft.items.push(action.payload);
            break;
        case PostsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }
}, initialPostsState);