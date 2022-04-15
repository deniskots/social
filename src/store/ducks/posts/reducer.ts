import produce, {Draft} from 'immer';
import {AddFormState, LoadingState, PostsState} from "./contracts/state";
import {PostsActionsType} from "./contracts/ActionTypes";
import {PostsActions} from "./actionCreators";

const initialPostsState: PostsState = {
    items: [],
    addFormState: AddFormState.NEVER,
    loadingState: LoadingState.NEVER,
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
        case PostsActionsType.FETCH_ADD_POST:
            draft.addFormState = AddFormState.LOADING;
            break;
        case PostsActionsType.ADD_POST:
            draft.items.splice(0, 0, action.payload);
            draft.addFormState = AddFormState.NEVER;
            break;
        case PostsActionsType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload;
            break;
        case PostsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }
}, initialPostsState);