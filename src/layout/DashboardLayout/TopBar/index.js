import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  Button,
  Chip,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import Logo from "../../../components/Logo";
import LoginPopup from "../../../components/LoginPopup";

import Drawer from "@material-ui/core/Drawer";

import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CustomerDetails from "../../../components/CustomerDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //flexGrow: 1,
    color: "#000000",
  },
}));

const TopBar = ({ className, onMobileNavOpen }) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  const [openLoginPopup, setOpenLoginPopup] = useState(false);

  const [openCustomerDetailsPopup, setOpenCustomerDetailsPopup] =
    useState(false);
  const [loginCode, setLoginCode] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");

  const [loginDetails, setLoginDetails] = useState({
    loginCode: 0,
    mobileNumber: -1,
  });

  const handleLoginPopupOpen = () => {
    setOpenLoginPopup(true);
  };

  const handleLoginPopupClose = (loginDetails) => {
    setOpenLoginPopup(false);

    //alert(loginDetails.loginCode);
    //alert(loginDetails.mobileNumber);
    //setLoginCode(code);

    setLoginDetails(loginDetails);
  };

  const handleCustomerDetailsPopupOpen = () => {
    setOpenCustomerDetailsPopup(true);
  };

  const handleCustomerDetailsPopupClose = () => {
    setOpenCustomerDetailsPopup(false);
  };

  return (
    <>
      <AppBar
        //className={clsx(classes.root, className)}
        //elevation={0}

        style={{ background: "#ffffff" }}
      >
        <Toolbar>
          {/*<RouterLink to="/">
          <Logo />
        </RouterLink>*/}
          <Typography
            variant="subtitle1"
            color="inherit"
            className={classes.title}
          >
            HANGRIES
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="inherit" component={RouterLink} to={"/home"}>
            <Typography variant="button" className={classes.title}>
              Home
            </Typography>
          </Button>
          <Button color="inherit" component={RouterLink} to={"/menu"}>
            <Typography variant="button" className={classes.title}>
              Menu
            </Typography>
          </Button>
          <Button color="inherit" component={RouterLink} to={"/orderOnline"}>
            <Typography variant="button" className={classes.title}>
              Order Online
            </Typography>
          </Button>
          <Button color="inherit" component={RouterLink} to={"/reservation"}>
            <Typography variant="button" className={classes.title}>
              Reservation
            </Typography>
          </Button>
          <Button color="inherit" component={RouterLink} to={"/gallery"}>
            <Typography variant="button" className={classes.title}>
              Gallery
            </Typography>
          </Button>
          <Box flexGrow={1} />
          {loginDetails.loginCode === 0 && (
            <IconButton color="inherit" onClick={handleLoginPopupOpen}>
              <Typography variant="button" className={classes.title}>
                Login / SignUp
              </Typography>
            </IconButton>
          )}
          {loginDetails.loginCode === 1 && (
            <IconButton
              color="inherit"
              onClick={handleCustomerDetailsPopupOpen}
            >
              <Chip label={loginDetails.mobileNumber} component="a" clickable />
            </IconButton>
          )}
          <Hidden mdDown>
            <IconButton>
              {/*}
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge> */}
            </IconButton>
            <IconButton>{/*<InputIcon />*/}</IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton color="inherit" onClick={onMobileNavOpen}>
              {/*<MenuIcon />*/}
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <LoginPopup
        open={openLoginPopup}
        onClose={handleLoginPopupClose}
      ></LoginPopup>
      <CustomerDetails
        open={openCustomerDetailsPopup}
        onClose={handleCustomerDetailsPopupClose}
      ></CustomerDetails>{" "}
    </>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
