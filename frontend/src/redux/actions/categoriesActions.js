import axios from "axios"
import { ADMIN_ADD_CATEGORIES_FAILURE, ADMIN_ADD_CATEGORIES_REQUEST, ADMIN_ADD_CATEGORIES_SUCCESS, ADMIN_CATEGORIES_LIST_REQUEST, ADMIN_CATEGORIES_LIST_SUCCESS, ADMIN_DELETE_CATEGORY_FAILURE, ADMIN_DELETE_CATEGORY_REQUEST, ADMIN_DELETE_CATEGORY_SUCCESS, ADMIN_GET_CATEGORY_FAILURE, ADMIN_GET_CATEGORY_REQUEST, ADMIN_GET_CATEGORY_SUCCESS, ADMIN_UPDATE_CATEGORY_STATUS_FAILURE, ADMIN_UPDATE_CATEGORY_STATUS_REQUEST, ADMIN_UPDATE_CATEGORY_STATUS_SUCCESS } from "../constants/categoriesConstants";

import { logout } from "./userActions";


// SINGLE PRODUCT
// export const productDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: PRODUCT_DETAILS_REQUEST,
//     });

//     const { data } = await axios.get(`/api/products/${id}`);
//     console.log("dataaaa", data)
//     dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAILURE,
//       payload:
//         error?.response && error?.response?.data?.message
//           ? error?.response?.data?.message
//           : error?.message,
//     });
//   }
// };


// ADMIN CREATE CATEGORIES
export const adminCreateCategoriesAction = (payload) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_ADD_CATEGORIES_REQUEST,
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

    const {data: { data }} = await axios.post(`/api/categories/add-categories`, payload, config);
console.log("merchants added", data)
    dispatch({ type: ADMIN_ADD_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_ADD_CATEGORIES_FAILURE,
      payload: message,
    });
  }
};

// ADMIN GET ALL MERCHANTS
export const adminCategoriesListAction = () => async(dispatch, getState) => {
  try{
    dispatch({
      type: ADMIN_CATEGORIES_LIST_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };


  const { data: {data} } = await axios.get(`/api/categories`, config);
  console.log("data", data)

  dispatch({ type: ADMIN_CATEGORIES_LIST_SUCCESS, payload: data })

  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_ADD_CATEGORIES_FAILURE,
      payload: message
    })
  }
}

// ADMIN GET CATEGORIES BY ID: This action only gets the product details to populate the fields
export const getCategoryDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_GET_CATEGORY_REQUEST,
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

    const {
      data: { data },
    } = await axios.get(`/api/categories/${id}`, config);
    console.log("dataaaa", data);
    dispatch({ type: ADMIN_GET_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_GET_CATEGORY_FAILURE,
      payload: message,
    });
  }
};


// ADMIN UPDATE CATEGORY: This is the action that does the final updates
export const updateMerchantStatusAction = (categoryId, payload) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_UPDATE_CATEGORY_STATUS_REQUEST,
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

    const {
      data: { data },
    } = await axios.put(`/api/categories/${categoryId}`, payload, config);
    console.log("dataaaa", data)
    dispatch({ type: ADMIN_UPDATE_CATEGORY_STATUS_SUCCESS, payload: data });
    dispatch({ type: ADMIN_GET_CATEGORY_SUCCESS, payload: data });
 
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_UPDATE_CATEGORY_STATUS_FAILURE,
      payload: message
        
    });
  }
};


// ADMIN DELETE PRODUCT
export const adminDeleteMerchant = (categoryId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_DELETE_CATEGORY_REQUEST,
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

    await axios.delete(`/api/categories/${categoryId}`, config);

    dispatch({ type: ADMIN_DELETE_CATEGORY_SUCCESS });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_DELETE_CATEGORY_FAILURE,
      payload: message,
    });
  }
};

// ADMIN UPDATE PRODUCT: This action only gets the product details to populate the fields
// export const getProductDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: ADMIN_EDIT_PRODUCT_REQUEST,
//     });

//       // const {
//       //   userLogin: { userInfo },
//       // } = getState();

//       // const config = {
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //     Authorization: `Bearer ${userInfo?.token}`,
//       //   },
//       // };

//     const { data } = await axios.get(`/api/products/${id}`);
//     console.log("dataaaa", data)
//     dispatch({ type: ADMIN_EDIT_PRODUCT_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error?.response && error?.response?.data?.message
//         ? error?.response?.data?.message
//         : error?.message;
//     if (message === "Not authorized, no token found") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ADMIN_EDIT_PRODUCT_FAILURE,
//       payload: message
        
//     });
//   }
// };





