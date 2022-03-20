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
  const [loginCode, setIsLoginCode] = useState(0);

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
    //setIsLoginCode(code);

    setLoginDetails({
      loginCode: loginDetails.loginCode,
      mobileNumber: loginDetails.mobileNumber,
    });
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
            <IconButton color="inherit">
              <Chip
                label={loginDetails.mobileNumber}
                component="a"
                href="#chip"
                clickable
              />
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
    </>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
