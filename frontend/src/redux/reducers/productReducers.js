import {
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
export const createProductReviewReducer = (state = { }, action) => {
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
