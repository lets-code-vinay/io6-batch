import React from "react";

import "./style.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";
import { getOriginalPriceFromDiscount } from "../../utils/utility";

const ProductCardList = ({ product }) => {
  console.log("product", product);
  return (
    <>
      <Box className="product-list-container">
        <Box className="image-section">
          <IconButton className="heart-icon">
            <FavoriteIcon />
          </IconButton>
          <img src={product?.thumbnail} alt={product?.title} />
        </Box>

        <Box className="detail-section">
          <Typography variant="h3">{product?.title}</Typography>
          <Box className="rating-container">
            <Button
              variant="contained"
              className="rating"
              endIcon={<StarIcon />}
            >
              {(product?.rating).toFixed(1)}
            </Button>

            <Typography variant="body1" className="raters">
              {Math.round(Math.random() * 1000)} Ratings &{" "}
              {product.reviews.length} Reviews
            </Typography>
            {/* <img src={FK_ASSURED} alt="FK_ASSURED" /> */}
          </Box>
          <Typography variant="body2" className="description">
            {product?.description}
          </Typography>
          <Typography variant="body1">
            Brand: <strong>{product?.brand}</strong>
          </Typography>
          <Typography variant="body1">
            Category: <strong>{product?.category}</strong>
          </Typography>
        </Box>

        <Box className="price-section">
          <Typography variant="h4" className="price">
            &#8377;{product?.price}
          </Typography>

          <Box sx={{ display: "flex" }}>
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
          <Typography variant="body1" className="shippingInformation">
            {product?.shippingInformation}
          </Typography>
          <Typography variant="body1" className="stock">
            Only {product?.stock} left
          </Typography>
          <Typography variant="body1" className="warrantyInformation">
            {product?.warrantyInformation}
          </Typography>
          <Box className="btn-container">
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
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default ProductCardList;
