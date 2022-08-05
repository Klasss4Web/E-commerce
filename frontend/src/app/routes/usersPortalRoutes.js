import React from "react";
import "../userPortal/App.css";
// import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../userPortal/screens/HomeScreen";
import ProductPreviewScreen from "../userPortal/screens/ProductPreviewScreen";
import { Login } from "../userPortal/screens/Login";
import Register from "../userPortal/screens/Register";
import { ProfileScreen } from "../userPortal/screens/ProfileScreen";
import CartScreen from "../userPortal/screens/CartScreen";
import ShippingScreen from "../userPortal/screens/ShippingScreen";
import PaymentScreen from "../userPortal/screens/PaymentScreen";
import { PlaceOrderScreen } from "../userPortal/screens/PlaceOrderScreen";
import { OrderScreen } from "../userPortal/screens/OrderScreen";
import { NotFound } from "../userPortal/screens/NotFound";
import Header from "../userPortal/components/Header"
import { ProtectedRoutes } from "../../ProtectedRoutes";

function UsersPortalRoutes() {
  return (
    <Router>
      <Header />
      <div style={{ marginBottom: "30px" }}>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route path="/products/:id" component={ProductPreviewScreen} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoutes path="/profile" component={ProfileScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <ProtectedRoutes path="/shipping" component={ShippingScreen} />
          <ProtectedRoutes path="/payment" component={PaymentScreen} />
          <ProtectedRoutes path="/placeorder" component={PlaceOrderScreen} />
          <ProtectedRoutes path="/order/:id" component={OrderScreen} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default UsersPortalRoutes;
