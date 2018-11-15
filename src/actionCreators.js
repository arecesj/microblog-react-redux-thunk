import {
  CREATE_POST,
  DELETE_POST,
  EDIT,
  CREATE_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

export function createPost(data) {
  return {
    type: CREATE_POST,
    payload: {
      id: data.id,
      title: data.title,
      description: data.description,
      body: data.body,
      comments: data.comments
    }
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
}

export function edit(data) {
  return {
    type: EDIT,
    payload: {
      title: data.title,
      description: data.description,
      body: data.body
    }
  };
}

export function createComment(data, comment) {
  return {
    type: CREATE_COMMENT,
    payload: {
      comments: [...data.comments, comment]
    }
  };
}

export function deleteComment(data, comment) {
  return {
    type: DELETE_COMMENT,
    payload: {
      comments: [comment, ...data.comments]
    }
  };
}
