import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BANNER_IMG_1 from "../../assets/images/banner-images/carousel-1.avif";
import BANNER_IMG_2 from "../../assets/images/banner-images/carousel-2.jpeg";
import BANNER_IMG_3 from "../../assets/images/banner-images/carousel-3.webp";
import BANNER_IMG_4 from "../../assets/images/banner-images/carousel-4.jpg";
import "./style.css";
import { Box } from "@mui/material";

const Banner = () => {
  return (
    <Box className="banner-container">
      <Carousel
        showThumbs={false}
        showIndicators={true}
        showArrows={true}
        showStatus={true}
        swipeable={true}
        useKeyboardArrows={true}
      >
        <div className="banner-img-container">
          <img src={BANNER_IMG_1} className="banner-img" alt="banner-1" />
        </div>

        <div className="banner-img-container">
          <img src={BANNER_IMG_2} className="banner-img" alt="banner-2" />
        </div>

        <div className="banner-img-container">
          <img src={BANNER_IMG_3} className="banner-img" alt="banner-3" />
        </div>

        <div className="banner-img-container">
          <img src={BANNER_IMG_4} className="banner-img" alt="banner-4" />
        </div>
      </Carousel>
    </Box>
  );
};

export default Banner;
