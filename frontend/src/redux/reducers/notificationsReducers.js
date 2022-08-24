import { ADMIN_GET_NOTIFICATIONS_FAILURE, ADMIN_GET_NOTIFICATIONS_REQUEST, ADMIN_GET_NOTIFICATIONS_SUCCESS, ADMIN_UPDATE_NOTIFICATIONS_FAILURE, ADMIN_UPDATE_NOTIFICATIONS_REQUEST, ADMIN_UPDATE_NOTIFICATIONS_RESET, ADMIN_UPDATE_NOTIFICATIONS_SUCCESS } from "../constants/notificationConstants";

//ADMIN GET ALL NOTIFICATIONS
export const notificationListReducer = (state = { notifications: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_NOTIFICATIONS_REQUEST:
      return {
        loading: true,
        // notifications: [],
      };

    case ADMIN_GET_NOTIFICATIONS_SUCCESS:
      return {
        loading: false,
        // page: action.payload.page,
        // pages: action.payload.pages,
        notifications: action.payload,
      };

    case ADMIN_GET_NOTIFICATIONS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


//ADMIN UPDATE NOTIFICATIONS DETAILS:
export const adminUpdateNotificationReducer = (
  state = { notification: [], loading: false },
  action
) => {
  switch (action.type) {
    case ADMIN_UPDATE_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_UPDATE_NOTIFICATIONS_SUCCESS:
      return {
        loading: false,
        success: true,
        notification: action.payload,
      };

    case ADMIN_UPDATE_NOTIFICATIONS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case ADMIN_UPDATE_NOTIFICATIONS_RESET:
      return {
        notification: [],
      };

    default:
      return state;
  }
};

//ADMIN DELETE NOTIFICATIONS
// export const adminDeleteProductReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ADMIN_DELETE_PRODUCT_REQUEST:
//       return {
//         loading: true,
//       };

//     case ADMIN_DELETE_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//       };

//     case ADMIN_DELETE_PRODUCT_FAILURE:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };


