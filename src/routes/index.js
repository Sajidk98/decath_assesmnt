import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />

        <AuthRoutes path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
