import {
  POST_LIKED,
  POST_DISLIKED,
  REQUEST_POSTS,
  POSTS_RECEIVED
} from './Actions/actionTypes';

const home = (state = {
  isFetching: false,
  posts: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case POSTS_RECEIVED:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      });
    default:
      return state;
  }
};

export default home;
