import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";

import UsersPortalRoutes from "./app/routes/usersPortalRoutes";
import AdminPortalRoutes from "./app/routes/adminRoutes";
import MerchantPortalRoutes from "./app/routes/merchantRoutes";
import { useDispatch, useSelector } from "react-redux";
import { adminListProducts, merchantListProducts } from "./redux/actions/productActions";
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
      dispatch(merchantListProducts());
      
    }

     if (userInfo && userInfo?.userType==="merchant") {
      //  dispatch(adminListProducts());
      //  dispatch(adminOrdersListAction());
       dispatch(merchantListProducts());
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
    } else if (parsedData?.userType==="merchant") {
      return <MerchantPortalRoutes />;
    } else {
      return <UsersPortalRoutes />;
    }
  }
  return <UnAuthenticatedRoutes />;
}

export default App;
