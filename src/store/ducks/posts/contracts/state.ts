export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
};

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Post {
    _id: string;
    text: any;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export interface PostsState {
    items: Post[];
    loadingState: LoadingState;
    addFormState: AddFormState;
}


