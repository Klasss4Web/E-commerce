import {
  ADMIN_ADD_PRODUCT_FAILURE,
  ADMIN_ADD_PRODUCT_REQUEST,
  ADMIN_ADD_PRODUCT_RESET,
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
  ADMIN_UPDATE_PRODUCT_DETAILS_RESET,
  ADMIN_UPDATE_PRODUCT_DETAILS_SUCCESS,
  MERCHANT_ADD_PRODUCT_FAILURE,
  MERCHANT_ADD_PRODUCT_REQUEST,
  MERCHANT_ADD_PRODUCT_RESET,
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
  PRODUCT_REVIEW_RESET,
  PRODUCT_REVIEW_SUCCESS,
} from "../constants/productConstants";

//USERS
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        products: action.payload.products,
      };

    case PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//SINGLE PRODUCT REDUCER
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case PRODUCT_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//PRODUCT REVIEW REDUCER
export const createProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REVIEW_REQUEST:
      return {
        loading: true,
      };

    case PRODUCT_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case PRODUCT_REVIEW_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case PRODUCT_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};

//ADMIN ADD PRODUCT
export const adminAddProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };

    case ADMIN_ADD_PRODUCT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case ADMIN_ADD_PRODUCT_RESET:
      return {};

    default:
      return state;
  }
};

//ADMIN GET ALL PRODUCTS
export const adminProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADMIN_PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case ADMIN_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case ADMIN_PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//ADMIN EDIT PRODUCTS: THIS IS NOT DOING THE ACTUAL EDITING BUT JUST GETTING THE PRODUCT DETAILS TO POPULATE THE FIELDS
export const adminEditProductReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ADMIN_EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_EDIT_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case ADMIN_EDIT_PRODUCT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//ADMIN UPDATE PRODUCTS DETAILS:
export const adminUpdateProductDetailsReducer = (
  state = { product: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_UPDATE_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_UPDATE_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };

    case ADMIN_UPDATE_PRODUCT_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case ADMIN_UPDATE_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };

    default:
      return state;
  }
};

//ADMIN DELETE PRODUCTS
export const adminDeleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case ADMIN_DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ADMIN_DELETE_PRODUCT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//ADMIN GET ALL REVIEWS
export const adminReviewListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_REVIEWS_REQUEST:
      return {
        loading: true,
        reviews: [],
      };

    case ADMIN_GET_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };

    case ADMIN_GET_REVIEWS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//MERCHANT ADD PRODUCT
export const merchantAddProductReducer = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_ADD_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case MERCHANT_ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };

    case MERCHANT_ADD_PRODUCT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case MERCHANT_ADD_PRODUCT_RESET:
      return {};

    default:
      return state;
  }
};

//MERCHANT GET ALL PRODUCTS
export const merchantProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case MERCHANT_PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case MERCHANT_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case MERCHANT_PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
