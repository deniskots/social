import {PostsState} from "../../store/ducks/posts/contracts/state";
import axios from "axios";


export  const PostsApi = {
    fetchPosts(): Promise<PostsState ['items']> {
        return axios.get('/posts').then(({ data }) => data);
    }
}
