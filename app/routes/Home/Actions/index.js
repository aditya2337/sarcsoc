import {
  POST_LIKED,
  POST_DISLIKED,
  REQUEST_POSTS,
  POSTS_RECEIVED
} from './actionTypes';

function postLiked (bool) {
  return {
    type: POST_LIKED,
    likes: bool
  };
}

function postDisliked (bool) {
  return {
    type: POST_DISLIKED,
    dislikes: bool
  };
}

function receivePosts (posts) {
  return {
    type: POSTS_RECEIVED,
    posts
  };
}

function requestPosts () {
  return {
    type: REQUEST_POSTS
  };
}

function fetchPosts () {
  return function (dispatch) {
    dispatch(requestPosts());
    dispatch(receivePosts());
  };
}

module.exports = {
  postLiked,
  postDisliked,
  fetchPosts
};
