import {
  ADMIN_ORDER_DETAILS_FAILURE,
  ADMIN_ORDER_DETAILS_REQUEST,
  ADMIN_ORDER_DETAILS_SUCCESS,
  ADMIN_ORDER_LIST_FAILURE,
  ADMIN_ORDER_LIST_SUCCESS,
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
  ORDER_LIST_FAILURE,
  ORDER_LIST_REQUEST,
  ORDER_LIST_RESET,
  ORDER_LIST_SUCCESS,
} from "../constants/orderConstants";
import { ADMIN_ADD_PRODUCT_REQUEST } from "../constants/productConstants";

// CREATE ORDER REDUCER
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

// GET ORDER DETAILS REDUCER
export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
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

// ORDER PAYMENT DETAILS REDUCER
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
        // order: action.payload,
      };

    case ORDER_CREATE_PAYMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_CREATE_PAYMENT_RESET:
      return {};

    default:
      return state;
  }
};


// USER ORDER LIST REDUCER
export const orderListReducer = (state = { orders: []}, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };

    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };

    case ORDER_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_LIST_RESET:
      return { orders: [] };

    default:
      return state;
  }
};


//ADMIN GET ALL ORDERS
export const adminOrderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ADMIN_ADD_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_ORDER_LIST_SUCCESS:
      return {
        loading: false,
        // page: action.payload.page,
        // pages: action.payload.pages,
        orders: action.payload
      };

    case ADMIN_ORDER_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// ADMIN GET ORDER DETAILS REDUCER
export const adminOrderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case ADMIN_ORDER_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
