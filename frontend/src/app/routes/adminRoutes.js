import React from "react";
import "../adminPortal/Admin.css";
// import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddProductPage } from "../adminPortal/pages/AddProductPage";
import { CategoriesPage } from "../adminPortal/pages/CategoriesPage";
import { HomePage } from "../adminPortal/pages/HomePage";
import { Login } from "../adminPortal/pages/Login";
import { NotFound } from "../adminPortal/pages/NotFound";
import { OrderDetailsPage } from "../adminPortal/pages/OrderDetailsPage";
import { OrderPage } from "../adminPortal/pages/OrderPage";
import { ProductEditPage } from "../adminPortal/pages/ProductEditPage";
import { ProductsPage } from "../adminPortal/pages/ProductsPage";
import { UsersPage } from "../adminPortal/pages/UsersPage";
import { ProtectedRoutes } from "../../ProtectedRoutes";


const AdminPortalRoutes = () => {
  return (
    <Router>
      {/* <Header /> */}
      <div style={{ marginBottom: "30px" }}>
        <Switch>
          <ProtectedRoutes path="/" component={HomePage} exact />
          <ProtectedRoutes path="/products" component={ProductsPage} />
          <ProtectedRoutes path="/categories" component={CategoriesPage} />
          <ProtectedRoutes path="/orders" component={OrderPage} />
          <ProtectedRoutes path="/order/:id" component={OrderDetailsPage} />
          <ProtectedRoutes path="/add-products" component={AddProductPage} />
          <ProtectedRoutes path="/users" component={UsersPage} />
          <ProtectedRoutes
            path="/product/:id/edit"
            component={ProductEditPage}
          />
          <Route exact path="/login" component={Login} />
          <ProtectedRoutes path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default AdminPortalRoutes;
