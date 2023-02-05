import MyPosts from './MyPosts';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reduser';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    //  posts: state.profilePage.posts,
    //  newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
