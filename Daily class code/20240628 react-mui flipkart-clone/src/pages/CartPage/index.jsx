import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackdropLoader from "../../components/BackdropLoader";
import { API } from "../../configs/api";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CartPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [pinCode, setPinCode] = useState("110011");

  /**
   * @description Changing pincode
   * @param {Objet} e
   */
  const handlePinCode = (e) => {
    setPinCode(e.target.value);
  };

  /**
   * @description Getting pincode details from API
   */
  const getPinCode = async () => {
    try {
      setLoading(true);
      const api = API.GET_PINCODE.replace("#PINCODE#", pinCode);
      const response = await axios(api);
      console.log("response", response);
    } catch (err) {
      console.error("--error while getting pincode API--", err);
    }
  };
  return (
    <>
      {isLoading && <BackdropLoader />}
      <Header />
      <Box className="cart-container">
        <Box className="product-section">
          <Box className="user-pincode">
            <TextField
              id="outlined-error-helper-text"
              label="Change Pin Code"
              type={"number"}
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              value={pinCode}
              onChange={handlePinCode}
            ></TextField>
            <Button onClick={getPinCode}>Change</Button>
          </Box>
        </Box>
        <Box className="billing-section"></Box>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
