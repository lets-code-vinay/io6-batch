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

const Suggestions = () => {
  const suggestionData = [
    { id: 1, img: GROCERY, title: "Grocery", hasData: false },
    { id: 2, img: MOBILE, title: "Mobiles", hasData: false },
    { id: 3, img: FASHION, title: "Fashion", hasData: false },
    { id: 6, img: ELECTRONICS, title: "Electronics", hasData: false },
    { id: 4, img: FURNITURE, title: "Home & Furniture", hasData: false },
    { id: 5, img: APPLIANCES, title: "Appliances", hasData: false },
    { id: 8, img: TRAVEL, title: "Travel", hasData: false },
    { id: 7, img: TOYS, title: "Beauty Toys & More", hasData: false },
    { id: 9, img: TWO_WHEELER, title: "Two Wheeler", hasData: false },
  ];

  return (
    <>
      <Box className="suggestion-container">
        {suggestionData.map((ele, index) => {
          return (
            <Box key={index} className="suggestion">
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
