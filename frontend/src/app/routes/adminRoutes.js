import React from "react";
import "../adminPortal/Admin.css";
// import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddProductPage } from "../adminPortal/pages/AddProductPage";
import { HomePage } from "../adminPortal/pages/HomePage";
import { Login } from "../adminPortal/pages/Login";
import { NotFound } from "../adminPortal/pages/NotFound";
import { OrderDetailsPage } from "../adminPortal/pages/OrderDetailsPage";
import { OrderPage } from "../adminPortal/pages/OrderPage";
import { ProductEditPage } from "../adminPortal/pages/ProductEditPage";
import { ProductsPage } from "../adminPortal/pages/ProductsPage";
import { UsersPage } from "../adminPortal/pages/UsersPage";
import { ProtectedRoutes } from "../../ProtectedRoutes";
import { Header } from "../adminPortal/components/Header";
import SideBar from "../adminPortal/components/sidebar/index";
import { MerchantsPage } from "../adminPortal/pages/merchants/Merchants";
import { TransactionsPage } from "../adminPortal/pages/transactions/Transactions";
import { RatingsPage } from "../adminPortal/pages/ratings/Ratings";
import { Notifications } from "../adminPortal/pages/notifications/Notifications";
import { CategoriesPage } from "../adminPortal/pages/categories/CategoriesPage";
import { CounterPractice } from "../adminPortal/pages/CounterPractice";


const AdminPortalRoutes = () => {
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
          <ProtectedRoutes
            path="/counter"
            component={CounterPractice}
          />
          {/* <Route exact path="/login" component={Login} /> */}
          <ProtectedRoutes path="/*" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AdminPortalRoutes;
