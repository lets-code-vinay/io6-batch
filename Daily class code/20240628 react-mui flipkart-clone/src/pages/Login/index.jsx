import React, { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import FLIPKART_MAIN_IMAGE from "../../assets/images/login-page-image.jpg";
import { API, MESSAGES } from "../../configs/api";
import "./style.css";
import { Tooltip } from "@mui/material";
import BackdropLoader from "../../components/BackdropLoader";

const Login = () => {
  const login_img_style = {
    backgroundImage: `url(${FLIPKART_MAIN_IMAGE})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "red",
    height: "500px",
    padding: "0",
    margin: "0",
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isSubmit, setSubmit] = useState(false);

  /**
   * @description Show/hide password
   */
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  /**
   * @description button click to login
   */
  const handleLogin = async () => {
    try {
      if (loginData.email.length < 6 || loginData.password < 7) return;
      setSubmit(true);

      const resp = await axios.post(API.LOGIN_API, {
        username: "emilys", // pass your email address in real API loginData.email
        password: "emilyspass", // pass your email address in real API loginData.password
        expiresInMins: 30,
      });
      console.log("resp", resp);
    } catch (err) {
      console.error("--Error in login process--", err);
    }
  };

  const handleChange = (type) => (event) => {
    // if (type == "email") {
    //   setLoginData({ ...loginData, email: event.target.value });
    // } else if (type == "password") {
    //   setLoginData({ ...loginData, password: event.target.value });
    // }

    setLoginData({ ...loginData, [type]: event.target.value });
  };

  const emailErr = isSubmit && loginData?.email.length <= 5;
  const pwErr = isSubmit && loginData?.password.length <= 6;

  console.log("loginData", loginData);

  return (
    <>
      <BackdropLoader />
      <Box className="login-container">
        <Paper elevation={20} className="login-paper">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} className="fk-left-sec">
              <Box style={login_img_style}></Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} className="fk-right-sec">
              <Typography variant="h6">Login</Typography>
              <Typography variant="body1">
                Get access to your orders, Wishlist and recommendation
              </Typography>

              <Typography variant="h6">Enter Password*</Typography>
              <TextField
                id="outlined-error-helper-text"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon
                        style={{ color: emailErr ? "red" : "purple" }}
                      />
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange("email")}
                error={emailErr}
                helperText={emailErr && "Please Enter Valid Email"}
              />

              <Typography variant="h6">Enter Password*</Typography>
              <TextField
                id="outlined-error-helper-text"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                size="small"
                fullWidth
                margin="dense"
                onChange={handleChange("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {/* {showPassword ? "show" : "not-show"} */}
                      <IconButton onClick={handlePassword}>
                        {showPassword ? (
                          <VisibilityIcon
                            style={{ color: pwErr ? "red" : "purple" }}
                          />
                        ) : (
                          <VisibilityOffIcon
                            style={{ color: pwErr ? "red" : "purple" }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={pwErr}
                helperText={pwErr && "Please Enter Valid Password"}
              />

              <Box className="btn-container">
                <Tooltip
                  title={
                    (loginData.email.length < 6 &&
                      "Please enter valid Email") ||
                    (loginData.password.length < 7 &&
                      "Please enter valid Password")
                  }
                >
                  <span>
                    <Chip
                      className="chip-btn"
                      label="Login"
                      variant="outlined"
                      onClick={handleLogin}
                      disabled={
                        loginData.email.length < 6 || loginData.password < 7
                      }
                    />
                  </span>
                </Tooltip>
                <Chip
                  className="chip-btn"
                  label="Sign Up"
                  variant="contained"
                />
              </Box>
              <Typography>
                We no longer support login via social Account
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
