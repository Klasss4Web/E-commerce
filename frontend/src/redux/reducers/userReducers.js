import { ADMIN_REGISTER_USER_FAILURE, ADMIN_REGISTER_USER_REQUEST, ADMIN_REGISTER_USER_SUCCESS, ADMIN_UPDATE_PROFILE_FAILURE, ADMIN_UPDATE_PROFILE_REQUEST, ADMIN_UPDATE_PROFILE_SUCCESS, GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_RESET, GET_USERS_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAILURE, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_UPDATE, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAILURE, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

// LOGIN
export const userLoginReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

//REGISTER
export const userRegisterReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


//USER PROFILE
export const userProfileReducer = (
  state = { user: {}},
  action
) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        loading: true,
      };

    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };

    case USER_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_PROFILE_UPDATE:
      return {
        // loading: false,
        user: {},
      };

    default:
      return state;
  }
};


//UPDATE USER PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };

    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };

    case USER_UPDATE_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//UPDATE ADMIN PROFILE
export const adminUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };

    case ADMIN_UPDATE_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//UPDATE ADD NEW USER
export const adminCreateUserReducer = (state = {user: []}, action) => {
  switch (action.type) {
    case ADMIN_REGISTER_USER_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_REGISTER_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };

    case ADMIN_REGISTER_USER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// GET USERS LIST
export const userListReducer = (
  state = {users:[]},
  action
) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case GET_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case GET_USERS_RESET:
      return {users:[]};

    default:
      return state;
  }
};
