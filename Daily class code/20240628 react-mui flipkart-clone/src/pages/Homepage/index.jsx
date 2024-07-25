import React, { useEffect, useState } from "react";

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
  const [electronicProducts, setElectronicProducts] = useState([]);
  const [beautyFoodProducts, setBeautyFoodProducts] = useState([]);
  const [homeKitchenProducts, setHomeKitchenProducts] = useState([]);
  const [vehicleProducts, setVehicleProducts] = useState([]);
  const [menFashion, setMenFashionProducts] = useState([]);
  const [womenFashion, setWomenFashionProducts] = useState([]);
  const [womenAdornProducts, setWomenAdornProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const api = API.PRODUCTS_API;
      const res = await axios(api);
      console.log("res", res);
      const {
        status,
        data: { products = [] },
      } = res || {};
      if (status == 200) {
        // products.forEach((product) => {
        //   if (
        //     product?.category == "laptops" ||
        //     product?.category == "smartphones" ||
        //     product?.category == "mobile-accessories"
        //   ) {
        //     electronicProducts.push(product);
        //     setElectronicProducts(electronicProducts);
        //   }
        //   if (
        //     product?.category == "beauty" ||
        //     product?.category == "groceries" ||
        //     product?.category == "skin-care"
        //   ) {
        //     beautyFoodProducts.push(product);
        //     setBeautyFoodProducts(beautyFoodProducts);
        //   }
        //   if (
        //     product?.category == "furniture" ||
        //     product?.category == "home-decoration" ||
        //     product?.category == "kitchen-accessories"
        //   ) {
        //     homeKitchenProducts.push(product);
        //     setHomeKitchenProducts(homeKitchenProducts);
        //   }
        // });

        const electronics = products.filter(
          (product, index) =>
            product?.category == "laptops" ||
            product?.category == "smartphones" ||
            product?.category == "mobile-accessories"
        );

        setElectronicProducts(electronics);

        const beautyFood = products.filter(
          (product) =>
            product?.category == "beauty" ||
            product?.category == "groceries" ||
            product?.category == "skin-care"
        );
        setBeautyFoodProducts(beautyFood);

        const homeKitchen = products.filter(
          (product) =>
            product?.category == "furniture" ||
            product?.category == "home-decoration" ||
            product?.category == "kitchen-accessories"
        );

        setHomeKitchenProducts(homeKitchen);

        const auto = products.filter(
          (product) =>
            product?.category == "motorcycle" || product?.category == "vehicle"
        );

        setVehicleProducts(auto);

        const menFashion = products.filter(
          (product) => product?.category == "mens-shirts"
        );

        setMenFashionProducts(menFashion);

        const womenFashion = products.filter(
          (product) =>
            product?.category == "womens-dresses" || product?.category == "tops"
        );

        setWomenFashionProducts(womenFashion);

        const womenAdorn = products.filter(
          (product) =>
            product?.category == "womens-watches" ||
            product?.category == "womens-jewellery"
        );

        setWomenAdornProducts(womenAdorn);
      }
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
        <ProductSuggestions
          title={"Best of Electronics"}
          products={electronicProducts}
        />
        <ProductSuggestions
          title={"Beauty, Food, Toys & more"}
          products={beautyFoodProducts}
        />
        <ProductSuggestions
          title={"Home & Kitchen Decorations"}
          products={homeKitchenProducts}
        />
        <ProductSuggestions
          title={"Book, Auto & more"}
          products={vehicleProducts}
        />
        <ProductSuggestions
          title={"Men Fashion top deals"}
          products={menFashion}
        />
        <ProductSuggestions
          title={"Women Fashion top deals"}
          products={womenFashion}
        />
        <ProductSuggestions
          title={"Women Watches top deals"}
          products={womenAdornProducts}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
