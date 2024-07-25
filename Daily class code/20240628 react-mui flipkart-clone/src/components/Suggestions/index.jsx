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
import { useNavigate } from "react-router-dom";

const Suggestions = () => {
  const suggestionData = [
    {
      id: 1,
      img: GROCERY,
      title: "Grocery",
      hasData: false,
      category: "groceries",
    },
    {
      id: 2,
      img: MOBILE,
      title: "Mobiles",
      hasData: false,
      category: "smartphones",
    },
    {
      id: 3,
      img: FASHION,
      title: "Fashion",
      hasData: false,
      category: "womens-dresses",
    },
    {
      id: 6,
      img: ELECTRONICS,
      title: "Electronics",
      hasData: false,
      category: "tablets",
    },
    {
      id: 4,
      img: FURNITURE,
      title: "Home & Furniture",
      hasData: false,
      category: "furniture",
    },
    {
      id: 5,
      img: APPLIANCES,
      title: "Appliances",
      hasData: false,
      category: "home-decoration",
    },
    { id: 8, img: TRAVEL, title: "Travel", hasData: false, category: "beauty" },
    {
      id: 7,
      img: TOYS,
      title: "Beauty Toys & More",
      hasData: false,
      category: "kitchen-accessories",
    },
    {
      id: 9,
      img: TWO_WHEELER,
      title: "Two Wheeler",
      hasData: false,
      category: "vehicle",
    },
  ];

  const navigate = useNavigate();

  const redirectToCategoryPage = (category) => (event) => {
    navigate(`/products/${category}`);
  };

  return (
    <>
      <Box className="suggestion-container">
        {suggestionData.map((ele, index) => {
          return (
            <Box
              key={index}
              className="suggestion"
              onClick={redirectToCategoryPage(ele?.category)}
            >
              <img src={ele?.img} alt={ele?.title} />
              <Typography variant="body1">{ele?.title}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Suggestions;
