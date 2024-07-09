import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import dummy from "../../assets/images/dummyProduct.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.css";
import { API } from "../../configs/api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const ProductCardGrid = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: 375 }} className="product-card">
        <IconButton className="heart-icon">
          <FavoriteIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="194"
          image={product?.thumbnail || dummy}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" className="product-name">
            {product?.title || ""}
          </Typography>
          <Typography variant="body1" className="description">
            Subtitle Title
          </Typography>
          fAssured
          <Box className="price-container">
            <Typography variant="body1">price</Typography>
            <Typography variant="body1">original price</Typography>
            <Typography variant="body1">Discount</Typography>
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
