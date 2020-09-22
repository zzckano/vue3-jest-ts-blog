import { reactive } from "vue";
import { Post, User } from "@/types";
import axios from "axios";

interface PostsState {
  ids: string[];
  all: Record<string, Post>;
  loaded: boolean;
}

interface LoginUserState {
  ids: string[];
  all: Record<string, Post>;
  loaded: boolean;
  currentUserId?: string;
}

const initialPostsState = (): PostsState => ({
  ids: [],
  all: {},
  loaded: false,
});

const initialLoginUserState = (): LoginUserState => ({
  ids: [],
  all: {},
  loaded: false,
  currentUserId: undefined,
});

interface State {
  loginUser: LoginUserState;
  posts: PostsState;
}

const initialState = (): State => ({
  posts: initialPostsState(),
  loginUser: initialLoginUserState(),
});

class Store {
  protected state: State;

  constructor(initialState: State) {
    this.state = reactive(initialState);
  }

  public getState(): State {
    return this.state;
  }

  async fetchPosts() {
    const response = await axios.get<Post[]>("/posts");
    // console.log(response);
    // 处理数据

    for (const post of response.data) {
      if (!this.state.posts.ids.includes(post.id.toString())) {
        this.state.posts.ids.push(post.id.toString());
      }
      this.state.posts.all[post.id] = post;
    }

    this.state.posts.loaded = true;
  }

  async createPost(post: Post) {
    const response = await axios.post<Post>("/posts", post);
    this.state.posts.all[response.data.id] = response.data;
    this.state.posts.ids.push(response.data.id.toString());
  }

  async updatePost(post: Post) {
    const response = await axios.put<Post>("/posts", post);
    this.state.posts.all[response.data.id] = response.data;
  }

  async createUser(user: User) {
    // 创建用户...
    const response = await axios.post<Post>("/users", user);
    this.state.loginUser.all[response.data.id] = response.data;
    this.state.loginUser.ids.push(response.data.id.toString());
    this.state.loginUser.currentUserId = response.data.id.toString();

    console.log(this.state);
  }

  async signOut() {
    this.state.loginUser.currentUserId = undefined;
  }
}

const store = new Store(initialState());
export const useStore = () => store;
