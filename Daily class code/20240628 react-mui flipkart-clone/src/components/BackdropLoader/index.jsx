import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const BackdropLoader = () => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: 99 }}
        open={false}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default BackdropLoader;
