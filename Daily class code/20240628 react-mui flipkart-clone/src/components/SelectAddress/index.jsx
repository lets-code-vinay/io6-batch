import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import AddAddress from "../AddAddress";

const SelectAddress = ({ openAddress = false, onClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };

  const [open, setOpen] = React.useState(openAddress);
  const [newAddressOpen, setNewAddressOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleNewAddress = () => {
    setNewAddressOpen(true);
  };

  const closeNewAddress = () => {
    setNewAddressOpen(false);
  };
  console.log("newAddressOpen", newAddressOpen);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="address-box" sx={style}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleNewAddress}
            >
              Add New Address
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default SelectAddress;
