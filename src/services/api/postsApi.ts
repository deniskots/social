import {PostsState} from "../../store/ducks/posts/contracts/state";
import axios from "axios";


export  const PostsApi = {
    fetchPosts(): Promise<PostsState ['items']> {
        return axios.get('https://trycode.pw/c/IMH46.json').then(({ data }) => data);
    }
}
