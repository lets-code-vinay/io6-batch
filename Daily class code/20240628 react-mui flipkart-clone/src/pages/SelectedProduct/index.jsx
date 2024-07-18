import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Paper } from "@mui/material";
import "./style.css";
import { useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import { useLocation, useParams } from "react-router-dom";
import theme from "../../../theme";

const SelectedProduct = () => {
  const dataFromStore = useSelector((store) => store?.app?.selectedProduct);

  const [imgToMagnify, setImgToMagnify] = useState(dataFromStore?.thumbnail);

  /**
   * @description Changing main image on mouse hover
   * @param {String} image
   * @returns
   */
  const handleMainImgChange = (image) => () => {
    setImgToMagnify(image);
  };
  return (
    <Box style={{ backgroundColor: theme.palette.background.main }}>
      <Header />
      <Paper elevation={0} className="selected-product-container">
        <Box className="image-section">
          <Box className="image-suggestions">
            {dataFromStore?.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt={index}
                  className="img-suggestion"
                  onMouseOver={handleMainImgChange(image)}
                />
              );
            })}
          </Box>
          <Box className="image-magnify-sec">
            <ReactImageMagnify
              className="thumbnail"
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: imgToMagnify,
                },
                largeImage: {
                  src: imgToMagnify,
                  width: 1200,
                  height: 1800,
                  className: "large-img",
                },
                isHintEnabled: true,
                // hintTextMouse: "Welcome",
                enlargedImageContainerDimensions: {
                  width: "100%",
                  height: "100%",
                },
              }}
            />
          </Box>
        </Box>
        <Box className="detail-section">andf</Box>
      </Paper>
      <Footer />
    </Box>
  );
};

export default SelectedProduct;
