import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from '../adminPortal/pages/Login';

export const UnAuthenticatedRoutes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/*" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
