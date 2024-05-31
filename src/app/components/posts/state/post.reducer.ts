import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';
import { addPost, deletePost, updatePost } from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let p = { ...action };
    p.id = state.length + 1;
    return [...state, p];
  }),
  on(updatePost, (state, action) => {
    // console.log(state, action);
    const updatedPost = state.map((post) => {
      return action.id === post.id ? action : post;
    });
    // console.log('updatedPost', updatedPost);
    return [...updatedPost];
  }),
  on(deletePost, (state, action) => {
    console.log(action.id);
    let list = state.filter((post) => post.id != action.id);
    return [...list];
  })
);

export function postReducer(state, action) {
  return _postReducer(state, action);
}
