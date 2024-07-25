import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filters from "../../components/Filters";
import ProductCardGrid from "../../components/ProductCardGrid";
import BackdropLoader from "../../components/BackdropLoader";
import ProductCardList from "../../components/ProductCardList";

import theme from "../../../theme";
import { API } from "../../configs/api";

import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useParams } from "react-router-dom";
import NotFound from "../../components/NotFound";

const ProductsPage = () => {
  const params = useParams();

  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [listType, setListType] = useState("grid");

  /**
   * @description fetch api when page loads
   */
  useEffect(() => {
    if (params.category == "all") {
      fetchAllProducts();
    } else {
      fetchCategoryProducts(params.category);
    }
  }, [params.category]);

  /**
   * @description Calling API to fetch product data
   */
  const fetchAllProducts = async () => {
    try {
      setLoading(true);

      const api = API.PRODUCTS_API;
      const res = await axios(api);
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

  /**
   * #description Fetch products as per given category
   * @param {String} category
   */
  const fetchCategoryProducts = async (category) => {
    try {
      setLoading(true);

      const api = API.GET_PRODUCT_BY_CATEGORY.replace("#CATEGORY#", category);
      const { status, data: { products = [] } = {} } = await axios(api);

      if (status == 200) {
        setProductData(products);
        setLoading(false);
      }
    } catch (err) {
      console.error("--error while fetching category Api--", err);
      setLoading(false);
    }
  };

  /**
   * @description changing view layout
   * @param {String} type
   * @returns
   */
  const changeView = (type) => () => {
    if (type == "grid") {
      setListType("grid");
    } else {
      setListType("list");
    }
  };

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
            }}
          >
            <Filters />
          </Box>

          <Box
            style={{
              backgroundColor: theme.palette.white,
            }}
            xs={12}
            sm={12}
            md={10}
            lg={10}
            className="products-main"
          >
            <Box className="action-container">
              <IconButton onClick={changeView("grid")}>
                <ViewModuleIcon
                  color={listType == "grid" ? "primary" : "grey"}
                />
              </IconButton>
              <IconButton onClick={changeView("list")}>
                <ViewListIcon color={listType == "list" ? "primary" : "grey"} />
              </IconButton>
            </Box>

            {listType == "grid" && (
              <Box className="products">
                {productData.length == 0 && <NotFound />}
                {productData.map((product, index) => {
                  return <ProductCardGrid key={index} product={product} />;
                })}
              </Box>
            )}

            {listType == "list" && (
              <Box>
                {productData.length == 0 && <NotFound />}
                {productData.map((product, index) => {
                  return <ProductCardList key={index} product={product} />;
                })}
              </Box>
            )}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ProductsPage;
