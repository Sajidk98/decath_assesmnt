import React from "react";
import MyCart from "../pages/MyCart";
import { Redirect, Route } from "react-router-dom";
import SignIn from "../pages/Login";

const AuthRoutes = ({ ...rest }) => {
  const isAuth = localStorage.getItem("isAuthenticated");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <MyCart {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default AuthRoutes;
