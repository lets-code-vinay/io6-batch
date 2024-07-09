import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";

import SendIcon from "@mui/icons-material/Send";
import WorkIcon from "@mui/icons-material/Work";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import HelpIcon from "@mui/icons-material/Help";

import "./style.css";
import { Typography } from "@mui/material";
import theme from "../../../theme";

const Footer = () => {
  return (
    <>
      <Box
        className="footer-container"
        style={{ backgroundColor: theme.palette.footer.main }}
      >
        <List className="footer-menus">
          <ListItemButton>
            <WorkIcon className="footer-icons" />
            <ListItemText primary="Become a seller" />
          </ListItemButton>

          <ListItemButton>
            <LocalActivityIcon className="footer-icons" />
            <ListItemText primary="Advertise" />
          </ListItemButton>

          <ListItemButton>
            <CardGiftcardIcon className="footer-icons" />
            <ListItemText primary="Gift Cards" />
          </ListItemButton>

          <ListItemButton>
            <HelpIcon className="footer-icons" />
            <ListItemText primary="Help Center" />
          </ListItemButton>

          <Typography variant="body1">&copy; 2007-2024 Flipkart.com</Typography>
        </List>
      </Box>
    </>
  );
};

export default Footer;
