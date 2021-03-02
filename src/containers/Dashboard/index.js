import { Grid, Hidden, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type from "../../actions/constant";
import ListItem from "./listItem";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(({ products }) => products.data);
  const isAuth = localStorage.getItem("isAuthenticated");
  const handleAddToCart = (pid) => {
    if (isAuth) {
      dispatch({ type: type.ADD_TO_CART_REQUEST, payload: { pid: pid } });
    }
    history.push("/cart");
  };

  return (
    <Grid container spacing={3}>
      {products.map((product) => {
        return (
          <Grid key={product.pid} item xs={12} md={3} lg={3}>
            <ListItem handleAddToCart={handleAddToCart} product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Dashboard;
