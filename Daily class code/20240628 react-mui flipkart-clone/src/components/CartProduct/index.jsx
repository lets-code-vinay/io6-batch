import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./style.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { setSelectedProduct } from "../../redux/appReducer/appReducer";

const CartProduct = ({
  product = {},
  onProductQuantityUpdate,
  onRemoveCart,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(product?.quantity);

  /**
   * @description Changing quantity
   * @param {Object} event
   * @returns
   */
  const handleChangeQuantity = (event) => {
    if (isNaN(Number(event?.target?.value))) return quantity;
    setQuantity(Number(event?.target?.value));

    const updatedQuantity = {
      ...product,
      quantity: Number(event?.target?.value),
    };
    onProductQuantityUpdate(updatedQuantity);
  };

  /**
   * @description Redirecting to selected product page
   */
  const handleProduct = () => {
    dispatch(setSelectedProduct(product));
    navigate(`/selected-product/${product?.id}`);
  };

  /**
   * @description Adding/Removing quantity
   * @param {String} type
   * @returns
   */
  const handleQuantityIncDec = (type) => () => {
    //
    if (type == "inc") {
      if (quantity == product?.stock) return quantity;

      const updatedQuantity = { ...product, quantity: quantity + 1 };
      onProductQuantityUpdate(updatedQuantity);
      setQuantity(quantity + 1);
    }

    if (type == "dec") {
      if (quantity == product?.minimumOrderQuantity) return quantity;

      const updatedQuantity = { ...product, quantity: quantity - 1 };
      onProductQuantityUpdate(updatedQuantity);

      setQuantity(quantity - 1);
    }
  };

  /**
   * Remove cart item form cart
   */
  const removeFromCart = () => {
    onRemoveCart(product);
  };

  return (
    <>
      <Box className="single-cart-product">
        <Box className="image-and-quant">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            onClick={handleProduct}
          />
          <Box className="quant-controller">
            <IconButton
              aria-label="remove"
              onClick={handleQuantityIncDec("dec")}
              disabled={
                quantity == product?.minimumOrderQuantity || quantity == 1
              }
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <TextField
              className="quantity"
              value={quantity}
              onChange={handleChangeQuantity}
            ></TextField>
            <IconButton
              disabled={quantity == product.stock}
              aria-label="add"
              onClick={handleQuantityIncDec("inc")}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </Box>

        <Box className="detail">
          <Box className="detail-sec" onClick={handleProduct}>
            <Box className="title-shipping">
              <Typography variant="h6">{product?.title}</Typography>
              <Typography variant="body2" color={"primary"}>
                {product?.shippingInformation}
              </Typography>
            </Box>
            <Typography variant="body1" className="brand">
              {product?.brand}
            </Typography>
            {product?.stock == 0 ? (
              "out of stock"
            ) : (
              <>
                <Typography variant="body1">
                  in Stock: <strong>{product?.stock}</strong>
                </Typography>

                <Typography variant="body1" className="price">
                  &#8377;{product?.price}
                </Typography>
              </>
            )}
          </Box>

          <Box className="btn-container">
            <Button
              variant="outlined"
              color="primary"
              //   onClick={handleAddToCart(product)}
            >
              Save For Later
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={removeFromCart}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default CartProduct;
