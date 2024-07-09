import React from "react";
import Box from "@mui/material/Box";

import "./style.css";

import theme from "../../../theme";

const Filters = () => {
  return (
    <>
      <Box
        className="filter-container"
        style={{ backgroundColor: theme.palette.white.main }}
      >
        Filter section
      </Box>
    </>
  );
};

export default Filters;
