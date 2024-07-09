import React, { useEffect } from "react";

import Box from "@mui/material/Box";

import Header from "../../components/Header";
import Suggestions from "../../components/Suggestions";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

import theme from "../../../theme";
import ProductSuggestions from "../../components/ProductSuggestions";
import { API } from "../../configs/api";
import axios from "axios";

const Homepage = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const api = API.PRODUCTS_API.replace("#LIMIT#", 3000).replace(
        "#OFFSET#",
        10
      );
      const res = await axios(api);
      console.log("res", res);
    } catch (err) {
      console.error("--Error while fetching products--", err);
    }
  };
  return (
    <Box style={{ backgroundColor: theme.palette.background.main }}>
      <Header />

      <Box style={{ width: "80%", margin: "auto" }}>
        <Suggestions />
        <Banner />
        <ProductSuggestions title={"Best of Electronics"} />
        <ProductSuggestions title={"Beauty, Food, Toys & more"} />
        <ProductSuggestions title={"Grooming, Book, Auto & more"} />
        <ProductSuggestions title={"Fashion top deals"} />
        Homepage page
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
