import { authAPI } from './api';
import { getAuthUserData } from './auth-reduser';
const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
  initialized: false,
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return { type: INITIALIZED_SUCCESS };
};

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthUserData());
  dispatch(initializedSuccess());
};

export default appReduser;
