import React from "react";
import Box from "@mui/material/Box";
import NOT_FOUND from "../../assets/images/page-not-found.jpg";

const NotFound = () => {
  return (
    <>
      <Box style={{ width: "100%" }}>
        <img
          src={NOT_FOUND}
          alt="not found page"
          style={{ width: "100%", height: "700px" }}
        />
      </Box>
    </>
  );
};

export default NotFound;
