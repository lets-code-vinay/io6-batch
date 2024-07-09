import { Box, Typography } from "@mui/material";
import React from "react";
import TWO_WHEELER from "../../assets/images/suggestions/twowheeler.png";
import GROCERY from "../../assets/images/suggestions/grocery.png";
import MOBILE from "../../assets/images/suggestions/mobiles.png";
import FASHION from "../../assets/images/suggestions/fashion.png";
import FURNITURE from "../../assets/images/suggestions/furniture.png";
import APPLIANCES from "../../assets/images/suggestions/appliances.png";
import ELECTRONICS from "../../assets/images/suggestions/electronics.png";
import TOYS from "../../assets/images/suggestions/toys.png";
import TRAVEL from "../../assets/images/suggestions/travel.png";

import "./style.css";

const ProductSuggestions = ({ title = "abcd" }) => {
  return (
    <>
      <Box className="product-suggestion-container">
        <Typography variant="h5">{title}</Typography>
        <>
          <Box className="product-suggestion">
            <Box className="single-product-card">
              <img src={TOYS} alt={"title"} />
              <Typography variant="body1">{"title"}</Typography>
              <Typography variant="body2">{"price $"}</Typography>
            </Box>
          </Box>
        </>
      </Box>
    </>
  );
};

export default ProductSuggestions;
