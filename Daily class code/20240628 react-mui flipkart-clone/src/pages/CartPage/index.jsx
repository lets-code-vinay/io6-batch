import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartProduct from "../../components/CartProduct";
import AddAddress from "../../components/AddAddress";
import theme from "../../../theme";
import { getOriginalPriceFromDiscount } from "../../utils/utility";
import "./style.css";
import { Box } from "@mui/material";

const CartPage = () => {
  const cartItems = useSelector((store) => store.app.cartItems);
  const userAddress = useSelector((store) => store.app.userAddress);

  const cartProductsWithQuantity = cartItems.map((cart) => {
    return {
      ...cart,
      quantity: cart?.minimumOrderQuantity ? cart?.minimumOrderQuantity : 1,
    };
  });

  const [openAddress, setOpenAddress] = useState(false);
  const [updatedCartProducts, setUpdatedCartProducts] = useState(
    cartProductsWithQuantity
  );

  const coupon = (Math.random() * 100).toFixed(1);
  const deliveryCharges = (Math.random() * 100).toFixed(1);
  let originalPrice = 0;
  let totalDiscountPrice = 0;

  /**
   * @description fetching values for billing
   */
  updatedCartProducts.forEach((cart) => {
    let price = (cart.price * cart.quantity).toFixed(2);

    let priceBeforeDiscount = getOriginalPriceFromDiscount(
      price,
      cart?.discountPercentage
    );

    originalPrice = (
      Number(originalPrice) + Number(priceBeforeDiscount)
    ).toFixed(2);

    const discountPriceOfSingleProduct = Number(priceBeforeDiscount) - price;

    totalDiscountPrice = (
      Number(totalDiscountPrice) + Number(discountPriceOfSingleProduct)
    ).toFixed(2);
  });

  const handleProductQuantityUpdate = (productFromChild) => {
    const updatedQuantity = updatedCartProducts.map((product) => {
      if (product?.id == productFromChild?.id) {
        return productFromChild;
      } else {
        return product;
      }
    });

    setUpdatedCartProducts(updatedQuantity);
  };

  const handleAddress = () => {
    setOpenAddress(true);
  };
  const handleClose = () => {
    setOpenAddress(false);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = updatedCartProducts.filter(
      (cartProduct) => cartProduct.id != product?.id
    );
    setUpdatedCartProducts(updatedCart);
  };

  const total = (
    Number(originalPrice) -
    (Number(totalDiscountPrice) + Number(coupon) + Number(deliveryCharges))
  ).toFixed(2);

  return (
    <>
      {openAddress && (
        <AddAddress openAddress={openAddress} onClose={handleClose} />
      )}

      <Header />
      <Box
        className="cart"
        style={{ backgroundColor: theme.palette.background.main }}
      >
        <Box
          className="cart-container"
          gap={2}
          style={{ backgroundColor: theme.palette.background.main }}
        >
          <Paper elevation={0} className="product-section">
            <Paper className="user-address">
              {!userAddress?.pinCode ? (
                <Typography variant="body1">
                  <strong>Please add new address</strong>
                </Typography>
              ) : (
                <Box>
                  <Typography variant="body1">
                    Deliver to:{" "}
                    <strong>
                      {userAddress?.name}, {userAddress?.pinCode}
                    </strong>
                  </Typography>
                  <Typography variant="body2">{userAddress.address}</Typography>
                </Box>
              )}
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddress}
              >
                Change
              </Button>
            </Paper>

            <Paper className="cart-products-section">
              {updatedCartProducts.map((product, index) => {
                return (
                  <>
                    <CartProduct
                      key={index}
                      product={product}
                      onProductQuantityUpdate={handleProductQuantityUpdate}
                      onRemoveCart={handleRemoveFromCart}
                    />
                  </>
                );
              })}
            </Paper>
          </Paper>
          <Paper elevation={0} className="billing-section">
            <Typography
              variant="h6"
              className="billing-title"
              color={"secondary"}
            >
              PRICE DETAILS
            </Typography>
            <Divider />

            <Box className="price-container">
              <Box className="d-flex-jc_sb-al_c mb_10px">
                <Typography variant="body1" className="fw-500">
                  Price ({updatedCartProducts.length} items)
                </Typography>

                <Typography variant="body1" className="fw-600">
                  ₹{originalPrice}
                </Typography>
              </Box>

              <Box className="d-flex-jc_sb-al_c mb_10px">
                <Typography variant="body1" className="fw-500">
                  Discount
                </Typography>

                <Typography
                  variant="body1"
                  className="fw-600"
                  color={"secondary"}
                >
                  − ₹{totalDiscountPrice}
                </Typography>
              </Box>

              <Box className="d-flex-jc_sb-al_c mb_10px">
                <Typography variant="body1" className="fw-500">
                  Coupons for you
                </Typography>

                <Typography
                  variant="body1"
                  className="fw-600"
                  color={"secondary"}
                >
                  − ₹{coupon}
                </Typography>
              </Box>

              <Box className="d-flex-jc_sb-al_c mb_10px">
                <Typography variant="body1" className="fw-500">
                  Delivery Charges
                </Typography>

                <Box className="d-flex-jc_sb-al_c">
                  <Typography
                    color={"secondary"}
                    className="fw-500"
                    style={{
                      marginRight: "5px",
                      textDecoration: "line-through",
                    }}
                  >
                    ₹330
                  </Typography>
                  <Typography variant="body1" className="fw-600">
                    ₹{deliveryCharges}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="total-section d-flex-jc_sb-al_c mb_10px">
              <Typography variant="h6" className="fw-500">
                Total Amount
              </Typography>

              <Typography variant="h6" className="fw-600">
                ₹{total}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              className="mb_10px fw-600"
              style={{ color: "#388F3D" }}
            >
              You will save ₹20,519 on this order
            </Typography>
          </Paper>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default CartPage;
