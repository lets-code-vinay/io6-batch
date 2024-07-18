import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import dummy from "../../assets/images/dummyProduct.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";
import FK_ASSURED from "../../assets/images/fa.png";
import "./style.css";

import { getOriginalPriceFromDiscount } from "../../utils/utility";
import { setSelectedProduct } from "../../redux/appReducer/appReducer";

const ProductCardGrid = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * @description Getting product of selected Product
   * @param {Object} product
   * @returns
   */
  const handleProductClick = (product) => (e) => {
    console.log("handleProductClick", product);
    dispatch(setSelectedProduct(product));
    navigate(`/selected-product/${product?.id}`);
  };
  return (
    <>
      <Card
        sx={{ width: 310, height: 420 }}
        className="product-card"
        onClick={handleProductClick(product)}
      >
        <IconButton className="heart-icon">
          <FavoriteIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={product?.thumbnail ? product?.thumbnail : dummy}
          alt="Paella dish"
        />
        <CardContent>
          <Tooltip title={product?.title} arrow placement={"top"}>
            <Typography variant="h6" className="product-name">
              {product?.title || ""}
            </Typography>
          </Tooltip>
          <Typography variant="body1" className="description">
            {product?.brand}
          </Typography>
          <Box className="rating-container">
            <Button
              variant="contained"
              className="rating"
              endIcon={<StarIcon />}
            >
              {(product?.rating).toFixed(1)}
            </Button>
            <Typography variant="body1" className="raters">
              ({Math.round(Math.random() * 10000)})
            </Typography>
            <img src={FK_ASSURED} alt="FK_ASSURED" />
          </Box>
          <Box className="price-container">
            <Typography variant="body1" className="price">
              &#8377;{product?.price}
            </Typography>
            <Typography variant="body1" className="original-price">
              {getOriginalPriceFromDiscount(
                product?.price,
                product?.discountPercentage
              )}
            </Typography>
            <Typography variant="body1" className="discount">
              {product?.discountPercentage}% off
            </Typography>
          </Box>
          <Typography variant="body2">Offer</Typography>
        </CardContent>
        <CardActions disableSpacing className="btn-container">
          <Button
            variant="contained"
            className="add-cart-btn"
            startIcon={<ShoppingCartIcon />}
          >
            Add to Card
          </Button>
          <Button
            variant="contained"
            className="buy-now-btn"
            startIcon={<FlashOnIcon />}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCardGrid;
