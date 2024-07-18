import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./style.css";

const ProductSuggestions = ({ title = "", products = [] }) => {
  console.log("products", title, products);
  return (
    <>
      <Box className="product-suggestion-container">
        <Typography variant="h5">{title}</Typography>
        <>
          <Box className="product-suggestion">
            {products.map((product, index) => {
              return (
                <Box key={index} className="single-product-card">
                  <img src={product?.thumbnail} alt={"title"} />
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
