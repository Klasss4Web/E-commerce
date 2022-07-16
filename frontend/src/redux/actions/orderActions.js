import axios from "axios"
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";
import { ORDER_CREATE_FAIL, ORDER_CREATE_PAYMENT_FAILURE, ORDER_CREATE_PAYMENT_REQUEST, ORDER_CREATE_PAYMENT_SUCCESS, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../constants/orderConstants";
import { logout } from "./userActions";

// CREATE ORDER ACTIONS
export const createOrderAction = (order) => async(dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: CART_CLEAR_ITEMS, payload: data });

    localStorage.removeItem("cartItems")
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
}


// GET ORDER DETAILS ACTIONS
export const getOrderDetailsAction = (id) => async(dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    });
  }
}

// ORDER PAYMENTACTIONS
export const orderPaymentAction = (id, paymentResult) => async(dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_PAYMENT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.put(`/api/orders/${id}/pay`, paymentResult, config);

    dispatch({ type: ORDER_CREATE_PAYMENT_SUCCESS, payload: data });
    
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_CREATE_PAYMENT_FAILURE,
      payload: message,
    });
  }
}

