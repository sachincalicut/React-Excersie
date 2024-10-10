import { createStore } from 'redux';
import PostsReducer from './reducers/PostReducer';

export const store = createStore(PostsReducer);