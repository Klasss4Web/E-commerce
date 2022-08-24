import React from "react";
import "../merchantPortal/Admin.css";
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
import { Header } from "../merchantPortal/components/Header";
import SideBar from "../merchantPortal/components/sidebar/index";
import { MerchantsPage } from "../merchantPortal/pages/merchants/Merchants";
import { TransactionsPage } from "../merchantPortal/pages/transactions/Transactions";
import { RatingsPage } from "../merchantPortal/pages/ratings/Ratings";
import { Notifications } from "../merchantPortal/pages/notifications/Notifications";
import { CategoriesPage } from "../merchantPortal/pages/categories/CategoriesPage";
import { CounterPractice } from "../merchantPortal/pages/CounterPractice";

const MerchantPortalRoutes = () => {
  return (
    <Router>
      <Header />
      <SideBar />
      <div style={{ marginBottom: "30px", marginTop: "85px" }}>
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
  );
};

export default MerchantPortalRoutes;
