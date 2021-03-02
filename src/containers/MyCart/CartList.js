import React, { useEffect } from "react";
import {
  Button,
  CardMedia,
  Fab,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style";
import { Add, Remove } from "@material-ui/icons";

const CartList = ({
  cart,
  onIncreament,
  onDecreament,
  onRemove,
  onChangeQuantity,
}) => {
  const classes = styles();
  const products = useSelector(({ products }) => products.data);
  const currentProduct = products.find((item) => item.pid === cart.pid);
  const [item, setItem] = React.useState(cart.quantity);

  useEffect(() => {
    setItem(cart.quantity);
  }, [cart]);

  const handleBlur = () => {
    if (item && item !== "") {
      onChangeQuantity(cart.id, item);
    } else {
      setItem(cart.quantity);
    }
  };

  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={3}
          alignItems="center"
          className={classes.imageContainer}
        >
          <CardMedia
            className={classes.image}
            image={currentProduct.image_url}
          />
          <Fab
            disabled={cart.quantity <= 1}
            size="small"
            onClick={() => {
              onDecreament(cart.id);
            }}
          >
            <Remove />
          </Fab>
          <TextField
            variant="outlined"
            value={item}
            onChange={(e) => {
              if (!isNaN(e.target.value)) setItem(e.target.value);
            }}
            onBlur={handleBlur}
            className={classes.itemButton}
          />

          <Fab onClick={() => onIncreament(cart.id)} size="small">
            <Add />
          </Fab>
        </Grid>
        <Grid item xs={9}>
          <Typography gutterBottom>{currentProduct.name}</Typography>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            {currentProduct.description}
          </Typography>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            Discount - <span>&#8377;</span>
            {currentProduct.discount}
          </Typography>
          <Typography gutterBottom variant="h4" color="textSecondary">
            <span>&#8377;</span>
            {currentProduct.price}
          </Typography>
          <Button
            onClick={() => {
              onRemove(cart.id);
            }}
            variant="contained"
            color="secondary"
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CartList;
