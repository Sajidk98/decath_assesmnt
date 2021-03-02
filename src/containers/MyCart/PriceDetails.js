import React, { useState, useEffect } from "react";
import {
  Divider,
  Fab,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import styles from "./style";

const PriceDetails = (props) => {
  const products = useSelector(({ products }) => products.data);
  const { cart } = props;
  const classes = styles();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length !== 0) {
      let price = 0;
      let discount = 0;
      let delivery = 0;
      let totalPrice = 0;
      for (let i = 0; i < cart.length; i++) {
        const currentCart = cart[i];
        const currentProduct = products.find(
          (item) => item.pid === currentCart.pid
        );
        price += currentCart.quantity * currentProduct.price;
        discount += discount + currentCart.quantity * currentProduct.discount;
        delivery = price - discount > 499 ? 0 : 50;
        totalPrice = price - discount + delivery;
      }
      setPrice(price);
      setDelivery(delivery);
      setTotalPrice(totalPrice);
      setDiscount(discount);
    }
  }, [...cart]);

  return (
    <Paper elevation={3}>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" color="textSecondary">
            Price Details
          </Typography>
          <Divider className = {classes.divider} variant="fullWidth" />
          <Grid style={{ marginTop: 16 }} container spacing={3}>
            <Grid item xs={6}>
              <Typography
                gutterBottom
              >{`Price(${cart.length} items)`}</Typography>
            </Grid>
            <Grid item className = {classes.detailsRight} xs={6}>
              <Typography variant="subtitle2" gutterBottom>
                <span>&#8377;</span>
                {price}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Discount</Typography>
            </Grid>
            <Grid item className = {classes.detailsRight} xs={6}>
              <Typography
                style={{ color: "green" }}
                variant="subtitle2"
                gutterBottom
              >
                -<span>&#8377;</span>
                {discount}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Delivery Charges</Typography>
            </Grid>
            <Grid item className = {classes.detailsRight} xs={6}>
              <Typography variant="subtitle2" gutterBottom>
                <span>&#8377;</span>
                {delivery}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" gutterBottom>
                Total
              </Typography>
            </Grid>
            <Grid item className = {classes.detailsRight} xs={6}>
              <Typography variant="h4" gutterBottom>
                <span>&#8377;</span>
                {totalPrice}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PriceDetails;
