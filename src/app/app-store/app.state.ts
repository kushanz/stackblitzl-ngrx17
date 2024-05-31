import { CounterInterface } from '../components/counter/state/counter.model';
import { counterReducer } from '../components/counter/state/counter.reducer';
import { PostInterface } from '../components/posts/state/post.model';
import { postReducer } from '../components/posts/state/post.reducer';

export interface Appstate {
  counter: CounterInterface;
  posts: PostInterface[];
}
export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
};
