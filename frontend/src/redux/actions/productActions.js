import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST } from "../constants/productConstants";
import axios from "axios"

// ALL PRODUCTS
export const listProducts = () => async(dispatch) => {
  try{
    dispatch({
      type: PRODUCT_LIST_REQUEST
    })

  const { data } = axios.get("/api/products");
  dispatch({ type: PRODUCT_LIST_REQUEST, payload: data })
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

    const { data } = axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: data });
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