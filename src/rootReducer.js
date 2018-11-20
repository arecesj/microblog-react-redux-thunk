import {
  CREATE_POST,
  DELETE_POST,
  EDIT,
  CREATE_COMMENT,
  DELETE_COMMENT
} from './actionTypes';
// import uuid from 'uuid/v4';

const DEFAULT_STATE = {
  posts: []
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.post] };
    case DELETE_POST:
      return { ...state, posts: [action.post, ...state.posts] };

    // TODO: FIX FUNCTION HERE OR ELSE
    case EDIT:
      return { ...state, posts: [...state.posts, action.post] };
    case CREATE_COMMENT:
      return [...state.posts, action.post];
    case DELETE_COMMENT:
      return { ...state, posts: [...state.posts, action.post] };

    default:
      return state;
  }
}

export default rootReducer;
