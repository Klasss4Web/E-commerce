import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_PAYMENT_FAILURE,
  ORDER_CREATE_PAYMENT_REQUEST,
  ORDER_CREATE_PAYMENT_RESET,
  ORDER_CREATE_PAYMENT_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstants";

// CREATE ORDER
export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };

    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

// GET ORDER DETAILS
export const orderDetailsReducer = (state = {loading: true, orderItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// ORDER PAYMENT DETAILS
export const orderPaymentDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_PAYMENT_REQUEST:
      return {
        loading: true,
      };

    case ORDER_CREATE_PAYMENT_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case ORDER_CREATE_PAYMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_CREATE_PAYMENT_RESET:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

