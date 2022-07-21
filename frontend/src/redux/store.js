import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createProductReviewReducer, productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer, userProfileReducer, userRegisterReducer, userUpdateProfileReducer } from "./reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer, orderListReducer, orderPaymentDetailsReducer } from "./reducers/orderReducer";

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
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

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

  export default store
