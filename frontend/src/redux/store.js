import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  adminAddProductReducer,
  adminDeleteProductReducer,
  adminEditProductReducer,
  adminProductListReducer,
  adminReviewListReducer,
  adminUpdateProductDetailsReducer,
  createProductReviewReducer,
  merchantAddProductReducer,
  merchantProductListReducer,
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userListReducer,
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import {
  adminOrderDetailsReducer,
  adminOrderListReducer,
  orderCreateReducer,
  orderDeliveryReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPaymentDetailsReducer,
} from "./reducers/orderReducer";
import {
  adminAddMerchantReducer,
  adminDeleteMerchantReducer,
  adminGetMerchantById,
  adminUpdateMerchantStatusReducer,
  merchantListReducer,
} from "./reducers/merchantReducer";
import { adminAddCategoryReducer, adminDeleteCategoryReducer, adminUpdateCategoryReducer, categoryListReducer } from "./reducers/categoriesReducers";
import { counterReducer } from "./reducers/counterReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviews: createProductReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userUpdateProfile: userUpdateProfileReducer,
  createOrders: orderCreateReducer,
  orderPayment: orderPaymentDetailsReducer,
  orderDetails: orderDetailsReducer,
  orderList: orderListReducer,
  userList: userListReducer,
  adminProductList: adminProductListReducer,
  adminDeleteProduct: adminDeleteProductReducer,
  adminCreateProduct: adminAddProductReducer,
  adminEditProduct: adminEditProductReducer,
  updateProduct: adminUpdateProductDetailsReducer,
  adminOrderList: adminOrderListReducer,
  adminOrderDetails: adminOrderDetailsReducer,
  adminUpdateOrderDelivery: orderDeliveryReducer,
  adminMerchantList: merchantListReducer,
  adminGetSingleMerchant: adminGetMerchantById,
  updateMerchantStatus: adminUpdateMerchantStatusReducer,
  adminAddMerchant: adminAddMerchantReducer,
  adminDeleteMerchant: adminDeleteMerchantReducer,
  adminGetReviews: adminReviewListReducer,
  adminAddCategory: adminAddCategoryReducer,
  adminGetCategories: categoryListReducer,
  adminUpdateCategory: adminUpdateCategoryReducer,
  adminDeleteCategory: adminDeleteCategoryReducer,
  merchantAddProduct: merchantAddProductReducer,
  merchantProductList: merchantProductListReducer,
  counter: counterReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

//Login Details
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//Shipping Address
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
