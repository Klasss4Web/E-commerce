import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";

import UsersPortalRoutes from "./app/routes/usersPortalRoutes";
import AdminPortalRoutes from "./app/routes/adminRoutes";
import { useDispatch, useSelector } from "react-redux";
import { adminListProducts } from "./redux/actions/productActions";
import { adminOrdersListAction } from "./redux/actions/orderActions";
import { UnAuthenticatedRoutes } from "./app/routes/unAuthenticatedRoutes";

function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userInfo } = userLogin;
  const userData = localStorage.getItem("userInfo");
  const parsedData = JSON.parse(userData);

  // const decoded = jwtDecode(userData?.token);

  useEffect(() => {
    if (userInfo && userInfo?.isAdmin) {
      dispatch(adminListProducts());
      dispatch(adminOrdersListAction());
      // dispatch(adminListProducts());
      
    }

    if (parsedData?.token) {
      const decoded = jwtDecode(parsedData?.token);
      const expiryDate = new Date(decoded?.exp * 1000);
      if (new Date() > expiryDate) {
        setIsLoggedIn(false);
        localStorage.removeItem("userInfo");
      } else {
        //  dispatch(authSetUser({ ...decoded }));
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [dispatch, parsedData, userData]);

  if (parsedData?.token) {
    if (parsedData?.isAdmin) {
      return <AdminPortalRoutes />;
    }else {
      return <UsersPortalRoutes />
    }
  }
  return <UnAuthenticatedRoutes />;
}

export default App;
