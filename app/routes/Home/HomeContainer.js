import Home from './Home';
import { connect } from 'react-redux';
import * as actions from './Actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.home.posts,
    isFetching: state.home.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postLiked: (bool) => {
      dispatch(actions.postLiked(bool));
    },
    postDisliked: (bool) => {
      dispatch(actions.postDisliked(bool));
    },
    fetchPosts: () => {
      dispatch(actions.fetchPosts());
    }
  };
};

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeScreen;
