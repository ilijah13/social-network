import { authAPI } from './api';
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return { type: SET_USER_DATA, data: { userId, email, login, isAuth } };
};

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login =
  (email, password, rememberMe, setError) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      setError('server', {
        message: response.data.messages,
      });
    }
  };

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
