import axios from "axios"
import { ADMIN_ADD_MERCHANT_FAILURE, ADMIN_ADD_MERCHANT_REQUEST, ADMIN_ADD_MERCHANT_SUCCESS, ADMIN_DELETE_MERCHANT_FAILURE, ADMIN_DELETE_MERCHANT_REQUEST, ADMIN_DELETE_MERCHANT_SUCCESS, ADMIN_MERCHANT_LIST_REQUEST, ADMIN_MERCHANT_LIST_SUCCESS, ADMIN_UPDATE_MERCHANT_STATUS_FAILURE, ADMIN_UPDATE_MERCHANT_STATUS_REQUEST, ADMIN_UPDATE_MERCHANT_STATUS_SUCCESS } from "../constants/merchantConstant";
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


// ADMIN CREATE MERCHANTS
export const adminCreateMerchantAction = (payload) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_ADD_MERCHANT_REQUEST,
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

    const {data} = await axios.post(`/api/merchants`, payload, config);
console.log("merchants added", data)
    dispatch({ type: ADMIN_ADD_MERCHANT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_ADD_MERCHANT_FAILURE,
      payload: message,
    });
  }
};

// ADMIN GET ALL MERCHANTS
export const adminMerchantListAction = () => async(dispatch, getState) => {
  try{
    dispatch({
      type: ADMIN_MERCHANT_LIST_REQUEST
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


  const { data: {data} } = await axios.get(`/api/merchants`, config);
  console.log("data", data)

  dispatch({ type: ADMIN_MERCHANT_LIST_SUCCESS, payload: data })

  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_ADD_MERCHANT_FAILURE,
      payload: message
    })
  }
}

// ADMIN UPDATE PRODUCT: This is the action that does the finakl updates
export const updateMerchantStatusAction = (merchantId, status) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_UPDATE_MERCHANT_STATUS_REQUEST,
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
    } = await axios.put(`/api/merchants/${merchantId}`, status, config);
    console.log("dataaaa", data)
    dispatch({ type: ADMIN_UPDATE_MERCHANT_STATUS_SUCCESS, payload: data });
 
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_UPDATE_MERCHANT_STATUS_FAILURE,
      payload: message
        
    });
  }
};


// ADMIN DELETE PRODUCT
export const adminDeleteMerchant = (merchantId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_DELETE_MERCHANT_REQUEST,
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

    await axios.delete(`/api/merchants/${merchantId}`, config);

    dispatch({ type: ADMIN_DELETE_MERCHANT_SUCCESS });
  } catch (error) {
    const message =
      error?.response && error?.response?.data?.message
        ? error?.response?.data?.message
        : error?.message;
    if (message === "Not authorized, no token found") {
      dispatch(logout());
    }
    dispatch({
      type: ADMIN_DELETE_MERCHANT_FAILURE,
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





