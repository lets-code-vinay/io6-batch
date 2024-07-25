import React from "react";
import Box from "@mui/material/Box";
import NOT_FOUND from "../../assets/images/page-not-found.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Box style={{ width: "100%" }}>
        <img
          src={NOT_FOUND}
          alt="not found page"
          style={{ width: "100%", height: "800px" }}
        />
      </Box>
      <Footer />
    </>
  );
};

export default NotFoundPage;
