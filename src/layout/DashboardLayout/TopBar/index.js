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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import Logo from "../../../components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //flexGrow: 1,
    color: "#000000"
  },
  
}));

const TopBar = ({ className, onMobileNavOpen }) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
   
    <AppBar
      //className={clsx(classes.root, className)}
      //elevation={0}
      
      style={{ background: "#ffffff" }}
    >
      <Toolbar>
        {/*<RouterLink to="/">
          <Logo />
        </RouterLink>*/}

         
        <Box flexGrow={1} />

        <Button color="inherit" component={RouterLink} to={"/home"}><Typography variant="h6" className={classes.title}>Home</Typography></Button>
          <Button color="inherit" component={RouterLink} to={"/menu"}><Typography variant="h6" className={classes.title} >Menu</Typography></Button>
          <Button color="inherit" component={RouterLink} to={"/orderOnline"}><Typography variant="h6" className={classes.title}>Order Online</Typography></Button>
          <Button color="inherit" component={RouterLink} to={"/reservation"}><Typography variant="h6" className={classes.title}>Reservation</Typography></Button>
          <Button color="inherit" component={RouterLink} to={"/gallery"}><Typography variant="h6" className={classes.title}>Gallery</Typography></Button>
     
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
          <IconButton>
            {/*<InputIcon />*/}
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            {/*<MenuIcon />*/}
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
 
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
