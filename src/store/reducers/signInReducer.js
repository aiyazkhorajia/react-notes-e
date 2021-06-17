import {
  SIGNIN_REQUEST,
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_FAILURE,
  SIGNOUT
} from "Store/constants";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('access-token'),
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SIGNIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthenticated: true,
        user: action.payload
      };
    case SIGNIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
