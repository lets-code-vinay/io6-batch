import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CountertopsIcon from "@mui/icons-material/Countertops";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LOGO from "../../assets/logos/flipkart-logo-black-and-white.png";
import "./style.css";

import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [anchorUser, setAnchorUser] = useState(null);
  const [quickSearchAnchor, setQuickSearchAnchor] = useState(null);

  const cartItems = useSelector((store) => store.app.cartItems);
  const isOpenUserMenu = Boolean(anchorUser);
  const isQuickSearchAnchor = Boolean(quickSearchAnchor);

  /**
   * @description Redirecting to login page
   */
  const redirectToLogin = () => {
    navigate("/login");
  };

  /**
   * @description Click on user icon
   */
  const handleUserClick = (event) => {
    setAnchorUser(event.currentTarget);
  };

  /**
   * @description Clearing anchor to close profile menus
   */
  const handleClose = () => {
    setAnchorUser(null);
  };

  /**
   * @description Clearing anchor to close quick search menus
   */
  const handleCloseQuickSearch = () => {
    setQuickSearchAnchor(null);
  };

  /**
   * @description Click on quick search button icon
   */
  const handleQuickSearchClick = (event) => {
    setQuickSearchAnchor(event.currentTarget);
  };

  /**
   * @description Logging out and redirect to login page
   */
  const handleLogout = () => {
    console.log("logout clicked");
    localStorage.clear();
    navigate("/login");
  };

  /**
   * @description Redirecting to pages
   * @param {String} menuType
   * @returns
   */
  const handleMenu = (menuType) => () => {
    navigate(`/${menuType}`);
  };

  console.log("theme", theme);

  const isUserLoggedIn = Boolean(userData?.token);

  return (
    <>
      <Box
        color={theme.palette.white}
        style={{ backgroundColor: theme.palette.primary.main }}
        className="header-container"
      >
        <Box className="header">
          <img src={LOGO} alt="logo" className="logo" />

          <Box className="menu-container">
            <Button
              variant="text"
              className="global-btn"
              onClick={handleMenu("homepage")}
            >
              Home
            </Button>
            <Button
              variant="text"
              className="global-btn"
              onClick={handleMenu("products")}
            >
              Product
            </Button>
            <Button
              variant="text"
              className="global-btn"
              onClick={handleMenu("about")}
            >
              About
            </Button>
            <Button
              variant="text"
              className="global-btn"
              onClick={handleMenu("contact")}
            >
              Contact
            </Button>

            <Button
              id="fade-button"
              // aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              // aria-expanded={open ? 'true' : undefined}
              onClick={handleQuickSearchClick}
              variant="text"
              className="global-btn"
            >
              Quick Search
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={quickSearchAnchor}
              open={isQuickSearchAnchor}
              onClose={handleCloseQuickSearch}
              // TransitionComponent={Fade}
            >
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <LaptopChromebookIcon fontSize="small" />
                </ListItemIcon>
                Laptop
              </MenuItem>
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <PhoneAndroidIcon fontSize="small" />
                </ListItemIcon>
                Mobile
              </MenuItem>
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <AutoStoriesIcon fontSize="small" />
                </ListItemIcon>
                Book
              </MenuItem>
              <MenuItem onClick={handleCloseQuickSearch}>
                <ListItemIcon>
                  <CountertopsIcon fontSize="small" />
                </ListItemIcon>
                Kitchen
              </MenuItem>
            </Menu>
          </Box>
          <Box className="search-container">
            <TextField
              label="Enter your search"
              className="search-input"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {isUserLoggedIn ? (
            <>
              <Tooltip
                title={`${userData.firstName} ${userData.lastName}`}
                arrow
              >
                <Box className="user" onClick={handleUserClick}>
                  <IconButton
                    size="small"
                    sx={{ ml: 2 }}
                    // aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                  >
                    <img
                      src={userData.image}
                      alt="user-img"
                      className="user-image"
                    />
                  </IconButton>
                  <Typography variant="h6">{userData.firstName}</Typography>
                </Box>
              </Tooltip>

              <Menu
                anchorEl={anchorUser}
                id="account-menu"
                open={isOpenUserMenu}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant="contained"
              className="login-btn"
              onClick={redirectToLogin}
            >
              Login
            </Button>
          )}

          <Box className="notification-container">
            {isUserLoggedIn ? (
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            ) : (
              <ShoppingCartIcon />
            )}

            {isUserLoggedIn && (
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
