/**
 * Paths available to users who are not logged in
 * @constant
 */
export const PUBLIC_PATHS = {
  LANDING: "/",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  SIGNUP: "/signup",
  VERIFY_EMAIL: "/verify-email/:verificationId?",
};

/**
 * Paths available to users who are  logged in
 * @constant
 */
export const PROTECTED_PATHS = {
  DASHBOARD: "/dashboard",
  PRODUCTS: "/products",
  ADD_PRODUCTS: "/add-products",
  CATEGORIES: "/categories",
  ORDERS: "/orders",
  CUSTOMERS: "/users",
  MERCHANTS: "/merchants",
  RATINGS: "/ratings",
  TRANSACTIONS: "/transactions",
  NOTIFICATIONS: "/notifications",
  SETTINGS: "/settings",
  PROFILE: "/profile"
};

export const DATA_ROWS = {
  LIMIT: 20,
};

export const BOOKING_END_MINUTE = 30;
export const BOOKING_TIMER_IN_SECONDS = 1800000; //BOOKING_END_MINUTE in miliseconds
