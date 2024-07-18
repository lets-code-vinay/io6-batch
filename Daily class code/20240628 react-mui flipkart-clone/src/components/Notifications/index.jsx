import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Notifications = ({ isOpen = false, msg = "", type = "" }) => {
  return (
    <>
      {type == "success" && (
        <Snackbar
          open={isOpen}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert variant="filled" severity="success">
            {msg}
          </Alert>
        </Snackbar>
      )}

      {type == "error" && (
        <Snackbar
          open={isOpen}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert variant="filled" severity="error">
            {msg}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Notifications;
{
  /* <Alert variant="filled" severity="info">
        This is an outlined info Alert.
      </Alert> */
}
{
  /* <Alert variant="filled" severity="warning">
        This is an outlined warning Alert.
      </Alert> */
}
