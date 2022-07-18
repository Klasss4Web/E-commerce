import React from "react"
import './App.css';
import "./responsive.css"
// import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import SingleProduct from './screens/SingleProduct';
import { Login } from './screens/Login';
import Register from './screens/Register';
import { ProfileScreen } from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import { PlaceOrderScreen } from './screens/PlaceOrderScreen';
import { OrderScreen } from './screens/OrderScreen';
import { NotFound } from './screens/NotFound';
import { ProtectedRoutes } from "./ProtectedRoutes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/:id" component={SingleProduct} />
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
    </Router>
  );
}

export default App;
