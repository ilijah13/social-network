import { profileAPI } from './api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SET-PHOTO';
let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'Hello', likesCount: 1 },
    { id: 3, message: 'How is you it progress', likesCount: 2 },
    { id: 4, message: 'Good Morning', likesCount: 5 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const savePhotoSuccsess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.updatePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccsess(response.data.data.photos));
  }
};

export default profileReduser;
