import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { Search } from "@material-ui/icons";
import { Box, IconButton } from "@material-ui/core";

import firebase from "../../firebase/firebase";

export default function LoginPopup(props) {
  const { open, onClose } = props;
  //const [open, setOpen] = React.useState(false);

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loginCode, setLoginCode] = useState(0);

  const [loginDetails, setLoginDetails] = useState({
    loginCode: 0,
    mobileNumber: -1,
  });

  const handleClose = () => {
    onClose(loginDetails);
  };

  const handleMobileNumberSubmit = () => {
    console.log(mobileNumber);
  };

  useEffect(() => {
    if (loginDetails.loginCode === 1) {
      handleClose();
    }
  }, [loginDetails]);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("reCAPTCHA verified");
        },
      }
    );
  };

  const onSignInSubmit = (e) => {
    //setLoginCode(0);

    setLoginDetails({
      loginCode: 0,
      mobileNumber: -1,
    });

    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+" + mobileNumber;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP Sent....!!");
        alert("OTP Sent! Please check you mobile phone!");
      })
      .catch((error) => {
        console.log("SMS NOT SENT ERROR....!!");
        alert("Error!!! OTP Not Sent! Please add countery code as well!");
      });
  };

  const onOTPSubmit = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));

        console.log(JSON.stringify(user.phoneNumber));
        console.log(user.phoneNumber);
        //alert("User Verified Sucessfully!!");

        //setIsLoginCode(1);

        setLoginDetails({
          loginCode: 1,
          mobileNumber: user.phoneNumber,
        });
        //handleClose();
        // ...
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        //setIsLoginCode(0);

        setLoginDetails({
          loginCode: 0,
          mobileNumber: -1,
        });

        alert("OTP is wrong or expired.");

        //handleClose();
      });

    // setLoginDetails({
    //   loginCode: 1,
    //   mobileNumber: "+6598775383",
    // });

    //setLoginCode(1);
    //handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="false"
      >
        <DialogTitle id="form-dialog-title">Login / SignUp</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the 10 digit mobile number.
          </DialogContentText>

          <Box component="div" display="flex">
            <div id="sign-in-button"></div>

            <TextField
              autoFocus
              // margin="dense"
              id="mobileNumber"
              label="Mobile Number"
              type="text"
              name="mobileNumber"
              onChange={(e) => setMobileNumber(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              // InputProps={{
              //   endAdornment: (
              //     <IconButton>
              //       <Search />
              //     </IconButton>
              //   ),
              // }}
            />
            <Button color="primary" onClick={onSignInSubmit}>
              Submit
            </Button>
          </Box>
          <br />
          <Box component="div" display="flex">
            {" "}
            <TextField
              //autoFocus

              id="otp"
              label="OTP"
              type="text"
              name="otp"
              onChange={(e) => setOtp(e.target.value)}
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              color="primary"
              // size="small"
              onClick={onOTPSubmit}
            >
              Click
            </Button>
          </Box>
          <br />
          <br />
        </DialogContent>
      </Dialog>
    </div>
  );
}

//xport default LoginPopup;
