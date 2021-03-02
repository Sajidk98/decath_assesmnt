import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import styles from "./style";

const RecipeReviewCard = (props) => {
  const classes = styles();
  const { product, handleAddToCart } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        disableTypography
        title={<Typography variant="h6">{product.name}</Typography>}
      />
      <CardMedia className={classes.media} image={product.image_url} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography component="p">
          <span>&#8377;</span>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions style={{ textAlign: "center" }} disableSpacing>
        <Button
          variant="contained"
          color="default"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          fullWidth
          onClick={() => handleAddToCart(product.pid)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;
