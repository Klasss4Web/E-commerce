import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "../../app/adminPortal/components/loadingError/toastObject";
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";
import {
  ADMIN_ORDER_DETAILS_FAILURE,
  ADMIN_ORDER_DETAILS_REQUEST,
  ADMIN_ORDER_DETAILS_SUCCESS,
  ADMIN_ORDER_LIST_FAILURE,
  ADMIN_ORDER_LIST_REQUEST,
  ADMIN_ORDER_LIST_SUCCESS,
  ADMIN_UPDATE_DELIVERY_FAILURE,
  ADMIN_UPDATE_DELIVERY_REQUEST,
  ADMIN_UPDATE_DELIVERY_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_PAYMENT_FAILURE,
  ORDER_CREATE_PAYMENT_REQUEST,
  ORDER_CREATE_PAYMENT_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../constants/orderConstants";
import { logout } from "./userActions";

// CREATE ORDER ACTIONS
export const createOrderAction = (order) => async (dispatch, getState) => {
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

    localStorage.removeItem("cartItems");
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
};

// GET ORDER DETAILS ACTIONS
export const getOrderDetailsAction = (id) => async (dispatch, getState) => {
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
};

// ORDER PAYMENT ACTIONS
export const orderPaymentAction =
  (orderId, paymentResult) => async (dispatch, getState) => {
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

      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );

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
  };

// ORDER LIST ACTIONS
export const ordersListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders`, config);

    console.log("orderData", data);

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log("orderError", error.response);
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_FAILURE,
      payload: message,
    });
  }
};

//ADMIN GET ALL ORDERS ACTIONS
export const adminOrdersListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_ORDER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/admin/orders`, config);

    console.log("orderData", data);

    dispatch({ type: ADMIN_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log("orderError", error.response);
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_ORDER_LIST_FAILURE,
      payload: message,
    });
  }
};

// ADMIN GET ORDER DETAILS ACTIONS
export const admiGetOrderDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_ORDER_DETAILS_REQUEST,
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

    dispatch({ type: ADMIN_ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_ORDER_DETAILS_FAILURE,
      payload: message,
    });
  }
};

// UPDATE ORDER DELIVERY DETAILS ACTIONS
export const updatedDeliveryAction =
  (payload, setRefresh) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_UPDATE_DELIVERY_REQUEST,
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

      const { data } = await axios.put(`/api/orders/${payload?._id}/delivered`, payload, config);

      dispatch({ type: ADMIN_UPDATE_DELIVERY_SUCCESS, payload: data });
      setRefresh((prev) => !prev);
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      if (message === "Not authorized, no token found") {
        toast.error(message, ToastObjects);
        dispatch(logout());
      }
      dispatch({
        type: ADMIN_UPDATE_DELIVERY_FAILURE,
        payload: message,
      });
    }
  };
