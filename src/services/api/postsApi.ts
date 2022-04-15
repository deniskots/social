import {Post} from "../../store/ducks/posts/contracts/state";
import {axios} from "../../core/axios";


//интерфейс датой с неопределенным типом
interface Response<T> {
    status: string;
    data: T
}

export  const PostsApi = {
    async fetchPosts(): Promise<Post[]> {
        let result0 = await axios.get<Response<Post[]>>('/posts');
        const {data} = result0;
        return await data.data;
    },
    //аксиос когда буде отправлять запрос на постс,он берет данные интерфейса,
    //и функция возращает промис а промис возращает пост
    //когда аксос будет получать запрос,будет приходить ответ с типом который в респонсе,
    //где дата является обычным постом который нам необходим
    async fetchPostData(id: string): Promise<Post>{
        let result0 = await axios.get<Response<Post>>('/posts/' + id);
        const {data} = result0;
        return await data.data;
    },
    async addPost(payload: string): Promise<Post> {
        let result0 = await axios.post<Response<Post>>('/posts', {text: payload} );
        const {data} = result0;
        return await data.data;
    },

}
