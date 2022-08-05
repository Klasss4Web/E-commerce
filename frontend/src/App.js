import React, { useEffect } from "react";

import "./responsive.css";
import "react-toastify/dist/ReactToastify.css"

import UsersPortalRoutes from "./app/routes/usersPortalRoutes";
import AdminPortalRoutes from "./app/routes/adminRoutes";
import { useDispatch, useSelector } from "react-redux";
import { adminListProducts } from "./redux/actions/productActions";
import { adminOrdersListAction } from "./redux/actions/orderActions";

function App() {

  const dispatch = useDispatch()
  const userLogin = useSelector(state=>state.userLogin)
  const { userInfo } = userLogin;

  useEffect(() => {
    if(userInfo && userInfo?.isAdmin) {
      dispatch(adminListProducts())
      dispatch(adminOrdersListAction())
    }
  },[dispatch, userInfo])

  return <AdminPortalRoutes />;
}

export default App;
