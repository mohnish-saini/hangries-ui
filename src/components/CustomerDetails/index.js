import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  Box,
  Button,
  Grid,
  SwipeableDrawer,
  TextField,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({}));

export default function CustomerDetails(props) {
  const { open, onClose } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [customerDetails, setCustomerDetails] = useState({
    mobileNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  //const [open, setOpen] = React.useState(false);

  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        className={classes.drawer}
        open={open}
        onClose={handleClose}
      >
        <List>
          <ListItem>
            <TextField
              margin="dense"
              id="mobileNumber"
              label="Mobile Number"
              type="text"
              name={customerDetails.mobileNumber}
              disabled={true}
              //onChange={(e) => setMobileNumber(e.target.value)}
              //fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              name={customerDetails.firstName}
              //onChange={(e) => setMobileNumber(e.target.value)}
              //fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              margin="dense"
              id="lastName"
              label="Last Name"
              type="text"
              name={customerDetails.lastName}
              //onChange={(e) => setMobileNumber(e.target.value)}
              //fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="text"
              name={customerDetails.email}
              //onChange={(e) => setMobileNumber(e.target.value)}
              //fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              name={customerDetails.address}
              //onChange={(e) => setMobileNumber(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
        </List>
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </SwipeableDrawer>
    </div>
  );
}
