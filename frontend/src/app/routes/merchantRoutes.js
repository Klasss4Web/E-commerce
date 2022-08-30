import React, { useEffect, useState } from "react";
import "../adminPortal/Admin.css";
// import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddProductPage } from "../merchantPortal/pages/AddProductPage";
import { HomePage } from "../merchantPortal/pages/HomePage";
import { OrderDetailsPage } from "../merchantPortal/pages/OrderDetailsPage";
import { OrderPage } from "../merchantPortal/pages/OrderPage";
import { ProductEditPage } from "../merchantPortal/pages/ProductEditPage";
import { ProductsPage } from "../merchantPortal/pages/ProductsPage";
import { UsersPage } from "../merchantPortal/pages/UsersPage";
import { ProtectedRoutes } from "../../ProtectedRoutes";
// import { Header } from "../merchantPortal/components/Header";
// import SideBar from "../merchantPortal/components/sidebar/index";
import { MerchantsPage } from "../merchantPortal/pages/merchants/Merchants";
import { TransactionsPage } from "../merchantPortal/pages/transactions/Transactions";
import { RatingsPage } from "../merchantPortal/pages/ratings/Ratings";
import { Notifications } from "../merchantPortal/pages/notifications/Notifications";
import { CategoriesPage } from "../merchantPortal/pages/categories/CategoriesPage";
import { CounterPractice } from "../merchantPortal/pages/CounterPractice";
import { Header } from "../adminPortal/components/Header";
import SideBar from "../adminPortal/components/sidebar/index";

const MerchantPortalRoutes = () => {

  
  const [toggleSide, setToggleSide] = useState(false);
  const [showSidebar, setShowSideBar] = useState(true);
  // const [isMobileScreen] = window.innerWidth < "700px";
  const [isMobileScreen] = useState(
    () => window.matchMedia("(max-width: 700px)")?.matches
  );
  console.log("ism", isMobileScreen?.matches);

  const handleToggle = () => {
    setToggleSide((initial) => !initial);
    //  setShowSideBar(!showSidebar);
  };

  useEffect(() => {
    if (isMobileScreen) {
      setToggleSide((initial) => !initial);
    }
  }, [isMobileScreen]);

  return (

     <div className={`app-container`}>
      <Router>
        <Header
          toggle={handleToggle}
          sideBarActive={toggleSide}
          showSidebar={showSidebar}
        />
        <div style={{ display: toggleSide ? "none" : "block" }}>
          {showSidebar ? (
            <SideBar toggle={handleToggle} isMobileScreen={isMobileScreen} />
          ) : (
            ""
          )}
        </div>

        {/* <SideBar /> */}
        <div
          style={{
            marginBottom: "30px",
            marginTop: "75px",
            width: "100%",
            maxWidth: "100%",
          }}
        >
           <Switch>
          <ProtectedRoutes path="/dashboard" component={HomePage} exact />
          <ProtectedRoutes path="/products" component={ProductsPage} />
          <ProtectedRoutes path="/categories" component={CategoriesPage} />
          <ProtectedRoutes path="/orders" component={OrderPage} />
          <ProtectedRoutes path="/order/:id" component={OrderDetailsPage} />
          <ProtectedRoutes path="/add-products" component={AddProductPage} />
          <ProtectedRoutes path="/users" component={UsersPage} />
          <ProtectedRoutes path="/ratings" component={RatingsPage} />
          <ProtectedRoutes path="/merchants" component={MerchantsPage} />
          <ProtectedRoutes path="/transactions" component={TransactionsPage} />
          <ProtectedRoutes path="/notifications" component={Notifications} />
          <ProtectedRoutes
            path="/product/:id/edit"
            component={ProductEditPage}
          />
          <ProtectedRoutes path="/counter" component={CounterPractice} />
          {/* <Route exact path="/login" component={Login} /> */}
          <ProtectedRoutes path="/*" component={HomePage} />
        </Switch>
        </div>
      </Router>
    </div>
    
  );
};

export default MerchantPortalRoutes;
