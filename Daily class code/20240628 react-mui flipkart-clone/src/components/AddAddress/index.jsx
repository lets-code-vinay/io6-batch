import * as React from "react";
import { useDispatch } from "react-redux";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

import "./style.css";

import BackdropLoader from "../BackdropLoader";
import { API } from "../../configs/api";
import { setAddress } from "../../redux/appReducer/appReducer";
import axios from "axios";

const AddAddress = ({ openAddress = false, onClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(openAddress);
  const [isLoading, setLoading] = React.useState(false);
  const [isPinCodeData, setPinCodeData] = React.useState(false);

  const [userAddress, setUserAddress] = React.useState({
    name: "",
    address: "",
    landmark: "",
    pinCode: "",
    distt: "",
    postOffice: "",
    state: "",
    mobile: "",
    addressType: "",
  });

  /**
   * @description Closing Add Address form
   */
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  /**
   * @description Getting pincode details from API
   */
  const getPinCode = async (pinCode) => {
    try {
      setLoading(true);
      const api = API.GET_PINCODE.replace("#PINCODE#", pinCode);
      const response = await axios(api);
      const { data } = response;

      setPinCodeData(true);
      setUserAddress({
        ...userAddress,
        distt: data[0].PostOffice[0].District,
        postOffice: data[0].PostOffice[0].Name,
        state: data[0].PostOffice[0].State,
      });
    } catch (err) {
      console.error("--error while getting pincode API--", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (userAddress.pinCode.length == 6) {
      getPinCode(userAddress.pinCode);
    }
  }, [userAddress.pinCode]);

  /**
   * @description Handle change for address form
   * @param {String} type
   * @returns
   */
  const handleAddress = (type) => (event) => {
    switch (type) {
      case "name":
        setUserAddress({ ...userAddress, name: event.target.value });
        return;
      case "address":
        setUserAddress({ ...userAddress, address: event.target.value });
        return;
      case "landmark":
        setUserAddress({ ...userAddress, landmark: event.target.value });
        return;
      case "pin-code":
        setUserAddress({ ...userAddress, pinCode: event.target.value });
        return;
      case "post-office":
        setUserAddress({ ...userAddress, postOffice: event.target.value });
        return;
      case "distt":
        setUserAddress({ ...userAddress, distt: event.target.value });
        return;
      case "state":
        setUserAddress({ ...userAddress, state: event.target.value });
        return;
      case "mobile":
        setUserAddress({ ...userAddress, mobile: event.target.value });
        return;
      case "address-type":
        setUserAddress({ ...userAddress, addressType: event.target.value });
        return;
      default:
        setUserAddress({ ...userAddress });
        return;
    }
  };

  /**
   * @description Saving Address of user
   */
  const handleSaveUSerAddress = () => {
    dispatch(setAddress(userAddress));
    handleClose();
  };

  return (
    <div className="address-container">
      {isLoading && <BackdropLoader isLoading={isLoading} />}
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Address
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Enter Name"
                  type={"text"}
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="dense"
                  value={userAddress.name}
                  onChange={handleAddress("name")}
                ></TextField>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Enter Address"
                  type={"text"}
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="dense"
                  value={userAddress.address}
                  onChange={handleAddress("address")}
                ></TextField>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Landmark"
                  type={"text"}
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="dense"
                  value={userAddress.landmark}
                  onChange={handleAddress("landmark")}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Pin code"
                  type={"text"}
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="dense"
                  value={userAddress.pinCode}
                  onChange={handleAddress("pin-code")}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {isPinCodeData ? (
                  <Typography>Post Office: {userAddress.postOffice}</Typography>
                ) : (
                  <TextField
                    id="outlined-error-helper-text"
                    label="Post office"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    value={userAddress.postOffice}
                    onChange={handleAddress("post-office")}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {isPinCodeData ? (
                  <Typography>District: {userAddress.distt}</Typography>
                ) : (
                  <TextField
                    id="outlined-error-helper-text"
                    label="District"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    value={userAddress.distt}
                    onChange={handleAddress("distt")}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {isPinCodeData ? (
                  <Typography>State: {userAddress.state}</Typography>
                ) : (
                  <TextField
                    id="outlined-error-helper-text"
                    label="State"
                    type={"text"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    value={userAddress.state}
                    onChange={handleAddress("state")}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Mobile Number"
                  type={"text"}
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="dense"
                  value={userAddress.mobile}
                  onChange={handleAddress("mobile")}
                ></TextField>
              </Grid>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Address type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Home"
                  name="radio-buttons-group"
                  className="address-type"
                >
                  <FormControlLabel
                    value="home"
                    control={<Radio />}
                    label="Home"
                  />
                  <FormControlLabel
                    value="office"
                    control={<Radio />}
                    label="Office"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveUSerAddress}
            >
              Save
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddAddress;
