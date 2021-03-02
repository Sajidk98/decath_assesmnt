import { Button, Grid, Paper, Typography, Divider } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import type from "../../actions/constant";
import ConfirmationModal from "../../components/ConfirmationModal";
import CartList from "./CartList";
import PriceDetails from "./PriceDetails";
import styles from "./style";

const MyCart = () => {
  const { cart } = useSelector((state) => state);
  const classes = styles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [openConfirmation, setConfirmation] = React.useState(false);

  const handleRemove = (id) => {
    dispatch({ type: type.REMOVE_ITEM_REQUEST, payload: id });
  };

  const handleIncreament = (id) => {
    dispatch({ type: type.INCREAMENT_ITEM_REQUEST, payload: id });
  };

  const handleDecreament = (id) => {
    dispatch({ type: type.DECREAMENT_ITEM_REQUEST, payload: id });
  };
  const handleRemoveAll = () => {
    dispatch({ type: type.REMOVE_ALL_REQUEST });
    history.push("/");
  };

  const handleChangeQuant = (id, q) => {
    if (q && q !== "" && q !== NaN) {
      dispatch({
        type: type.CHANGE_QUANTITY_REQUEST,
        payload: { id: id, quantity: q },
      });
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper>
            <Grid container className={classes.root} spacing={3}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h4">
                  {`My Cart(${cart.data.length})`}
                </Typography>
                <Divider className={classes.divider} variant="fullWidth" />
              </Grid>
              {cart.data.length === 0 ? (
                <Typography>You do not have any item in your cart</Typography>
              ) : (
                cart.data.map((cartItem) => {
                  return (
                    <CartList
                      onIncreament={handleIncreament}
                      onDecreament={handleDecreament}
                      onChangeQuantity={handleChangeQuant}
                      key={cartItem.id}
                      cart={cartItem}
                      onRemove={handleRemove}
                    />
                  );
                })
              )}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          {cart.data.length != 0 && (
            <>
              <PriceDetails cart={cart.data} />
              <Button
                onClick={() => setConfirmation(true)}
                className={classes.checkOutButton}
                variant="contained"
                color="primary"
                fullWidth
              >
                Check Out
              </Button>
            </>
          )}
        </Grid>
      </Grid>
      {openConfirmation && (
        <ConfirmationModal
          title="Please confirm this order"
          open
          onConfirm={handleRemoveAll}
        />
      )}
    </>
  );
};

export default MyCart;
