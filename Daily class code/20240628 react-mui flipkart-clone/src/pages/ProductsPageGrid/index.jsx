import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filters from "../../components/Filters";
import { Box, Grid } from "@mui/material";
import theme from "../../../theme";
import ProductCardGrid from "../../components/ProductCardGrid";
import { API } from "../../configs/api";
import axios from "axios";
import BackdropLoader from "../../components/BackdropLoader";

const ProductsPageGrid = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const api = API.PRODUCTS_API;
      const res = await axios(api);
      console.log("res", res);
      const { status = "", data: { products = [] } = {} } = res;
      if (status == 200) {
        setProductData(products);
        setLoading(false);
      }
    } catch (err) {
      console.error("--Error while fetching products--", err);
      setLoading(false);
    }
  };

  console.log("productData", productData);
  return (
    <>
      {isLoading && <BackdropLoader isLoading={isLoading} />}
      <Box style={{ backgroundColor: theme.palette.background.main }}>
        <Header />

        <Box container className="product-container">
          <Box
            xs={12}
            sm={12}
            md={2}
            lg={2}
            className="filters"
            style={{
              backgroundColor: theme.palette.white,
              border: "1px solid black",
            }}
          >
            <Filters />
          </Box>
          <Box
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            style={{
              backgroundColor: theme.palette.white,
              border: "1px solid black",
            }}
            className="products"
          >
            {productData.map((product, index) => {
              return <ProductCardGrid product={product} />;
            })}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ProductsPageGrid;
