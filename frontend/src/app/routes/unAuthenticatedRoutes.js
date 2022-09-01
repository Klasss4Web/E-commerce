import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from '../adminPortal/pages/Login';
import Header from '../userPortal/components/Header';
import HomeScreen from '../userPortal/screens/HomeScreen';

export const UnAuthenticatedRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          {/* <Route path="/*" component={HomeScreen} /> */}
          {/* <Route exact path="/login" component={Login} />
          <Route path="/*" component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}
