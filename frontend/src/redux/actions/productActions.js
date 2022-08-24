import {
  ADMIN_ADD_PRODUCT_FAILURE,
  ADMIN_ADD_PRODUCT_REQUEST,
  ADMIN_ADD_PRODUCT_SUCCESS,
  ADMIN_DELETE_PRODUCT_FAILURE,
  ADMIN_DELETE_PRODUCT_REQUEST,
  ADMIN_DELETE_PRODUCT_SUCCESS,
  ADMIN_EDIT_PRODUCT_FAILURE,
  ADMIN_EDIT_PRODUCT_REQUEST,
  ADMIN_EDIT_PRODUCT_SUCCESS,
  ADMIN_GET_REVIEWS_FAILURE,
  ADMIN_GET_REVIEWS_REQUEST,
  ADMIN_GET_REVIEWS_SUCCESS,
  ADMIN_PRODUCT_LIST_FAILURE,
  ADMIN_PRODUCT_LIST_REQUEST,
  ADMIN_PRODUCT_LIST_SUCCESS,
  ADMIN_UPDATE_PRODUCT_DETAILS_FAILURE,
  ADMIN_UPDATE_PRODUCT_DETAILS_REQUEST,
  ADMIN_UPDATE_PRODUCT_DETAILS_SUCCESS,
  MERCHANT_ADD_PRODUCT_FAILURE,
  MERCHANT_ADD_PRODUCT_REQUEST,
  MERCHANT_ADD_PRODUCT_SUCCESS,
  MERCHANT_PRODUCT_LIST_FAILURE,
  MERCHANT_PRODUCT_LIST_REQUEST,
  MERCHANT_PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REVIEW_FAILURE,
  PRODUCT_REVIEW_REQUEST,
  PRODUCT_REVIEW_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";
import { logout } from "./userActions";

// ALL PRODUCTS
export const listProducts =
  (keyword = " ", pageNumber = " ") =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILURE,
        payload:
          error?.response && error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
      });
    }
  };

// SINGLE PRODUCT
export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);
    console.log("dataaaa", data);
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
export const productReviewAction =
  (productId, review) => async (dispatch, getState) => {
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

      await axios.post(`/api/products/${productId}/review`, review, config);
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

// ADMIN CREATE PRODUCT
export const adminCreateProduct =
  (name, price, description, image, countInStock, category) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_ADD_PRODUCT_REQUEST,
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

      let imgUrlsFromCloudinary;
      const formData = new FormData();

      formData.append("file", image);
      formData.append("upload_preset", "emmanuel");
      console.log("image", image);
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/emy-commerce/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          imgUrlsFromCloudinary = data.secure_url;
        });

      const { data } = await axios.post(
        `/api/products/admin/add-product`,
        {
          name,
          price,
          description,
          image: imgUrlsFromCloudinary,
          countInStock,
          category
        },
        config
      );

      dispatch({ type: ADMIN_ADD_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      if (message === "Not authorized, no token found") {
        dispatch(logout());
      }
      dispatch({
        type: ADMIN_ADD_PRODUCT_FAILURE,
        payload: message,
      });
    }
  };

// ADMIN GET ALL PRODUCTS
export const adminListProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_PRODUCT_LIST_REQUEST,
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

    const { data } = await axios.get(`/api/products/admin/products`, config);

    dispatch({ type: ADMIN_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_PRODUCT_LIST_FAILURE,
      payload: message,
    });
  }
};

// ADMIN UPDATE PRODUCT: This action only gets the product details to populate the fields
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_EDIT_PRODUCT_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo?.token}`,
    //   },
    // };

    const { data } = await axios.get(`/api/products/${id}`);
    console.log("dataaaa", data);
    dispatch({ type: ADMIN_EDIT_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_EDIT_PRODUCT_FAILURE,
      payload: message,
    });
  }
};

// ADMIN UPDATE PRODUCT: This is the action that does the finakl updates
export const updateProductDetails = (payload) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_UPDATE_PRODUCT_DETAILS_REQUEST,
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
      `/api/products/admin/${payload._id}`,
      payload,
      config
    );
    console.log("dataaaa", data);
    dispatch({ type: ADMIN_UPDATE_PRODUCT_DETAILS_SUCCESS, payload: data });
    dispatch({ type: ADMIN_EDIT_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_UPDATE_PRODUCT_DETAILS_FAILURE,
      payload: message,
    });
  }
};

// ADMIN DELETE PRODUCT
export const adminDeleteProduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_DELETE_PRODUCT_REQUEST,
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

    await axios.delete(`/api/products/admin/${productId}`, config);

    dispatch({ type: ADMIN_DELETE_PRODUCT_SUCCESS });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_DELETE_PRODUCT_FAILURE,
      payload: message,
    });
  }
};

// ADMIN GET ALL REVIEWS
export const adminGetReviewsActions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_REVIEWS_REQUEST,
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

    const { data } = await axios.get(`/api/products/admin/reviews`, config);

    dispatch({ type: ADMIN_GET_REVIEWS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_GET_REVIEWS_FAILURE,
      payload: message,
    });
  }
};

// MERCHANT CREATE PRODUCT
export const merchantCreateProduct =
  (name, price, description, image, countInStock, category) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: MERCHANT_ADD_PRODUCT_REQUEST,
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

      let imgUrlsFromCloudinary;
      const formData = new FormData();

      formData.append("file", image);
      formData.append("upload_preset", "emmanuel");
      console.log("image", image);
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/emy-commerce/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          imgUrlsFromCloudinary = data.secure_url;
        });

      const { data } = await axios.post(
        `/api/products/merchant/add-product`,
        {
          name,
          price,
          description,
          image: imgUrlsFromCloudinary,
          countInStock,
          category
        },
        config
      );

      dispatch({ type: MERCHANT_ADD_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      if (message === "Not authorized, no token found") {
        dispatch(logout());
      }
      dispatch({
        type: MERCHANT_ADD_PRODUCT_FAILURE,
        payload: message,
      });
    }
  };

// MERCHANT GET ALL PRODUCTS
export const merchantListProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_PRODUCT_LIST_REQUEST,
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

    const { data } = await axios.get(`/api/products/merchant/products`, config);

    dispatch({ type: MERCHANT_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: MERCHANT_PRODUCT_LIST_FAILURE,
      payload: message,
    });
  }
};

