import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIEW_FAILURE, PRODUCT_REVIEW_REQUEST, PRODUCT_REVIEW_SUCCESS } from "../constants/productConstants";
import axios from "axios"
import { logout } from "./userActions";

// ALL PRODUCTS
export const listProducts = (keyword = " ",pageNumber = " ") => async(dispatch) => {
  try{
    dispatch({
      type: PRODUCT_LIST_REQUEST
    })

  const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);

  dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload: error?.response && error?.response?.data?.message ? error?.response?.data?.message : error?.message,
    })
  }
}


// SINGLE PRODUCT
export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);
    console.log("dataaaa", data)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};

//CREATE PRODUCT REVIEW
export const productReviewAction = (productId, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_REVIEW_REQUEST,
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

    await axios.post(
      `/api/products/${productId}/review`,
      review,
      config
    );
    dispatch({ type: PRODUCT_REVIEW_SUCCESS });
  } catch (error) {
     const message =
       error?.response && error?.response?.data?.message
         ? error?.response?.data?.message
         : error?.message;
     if (message === "Not authorized, no token found") {
       dispatch(logout());
     }
     dispatch({
       type: PRODUCT_REVIEW_FAILURE,
       payload: message,
     });
  }
};