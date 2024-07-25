import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./style.css";
import { setSelectedProduct } from "../../redux/appReducer/appReducer";
import DUMMY from "../../assets/images/DummyProduct.png";

const ProductSuggestions = ({ title = "", products = [] }) => {
  console.log("products", title, products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * @description Redirecting selected product to detail page
   * @param {Object} product
   * @returns
   */
  const redirectToSelectedProductPage = (product) => (event) => {
    dispatch(setSelectedProduct(product));
    navigate(`/selected-product/${product?.id}`);
  };
  return (
    <>
      <Box className="product-suggestion-container">
        <Typography variant="h5">{title}</Typography>
        <>
          <Box className="product-suggestion">
            {products.map((product, index) => {
              return (
                <Box
                  key={index}
                  className="single-product-card"
                  onClick={redirectToSelectedProductPage(product)}
                >
                  <img
                    src={product?.thumbnail ? product?.thumbnail : DUMMY}
                    alt={"title"}
                  />
                  <Typography variant="body1">{product?.title}</Typography>
                  <Typography variant="body2">{product?.price}</Typography>
                </Box>
              );
            })}
          </Box>
        </>
      </Box>
    </>
  );
};

export default ProductSuggestions;
