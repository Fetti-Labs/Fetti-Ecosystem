import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import StoreIcon from '@mui/icons-material/Store';


//import * as Logo from './public/logo.png';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const logo = "/logo.png";
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "https://dao-beta.mango.markets/dao/DgeDDRXFDTKvuZorMG4BRHRsycy7vCSAk9mHEqkNurWx",
      name: "DAO",
      icon: <AdminPanelSettingsIcon className="text-white" />
    },
    {
      link: "/Swap",
      name: "Swap",
      icon: <SwapVerticalCircleIcon className="text-white" />
    },
    {
      link: "/Marketplace",
      name: "Marketplace",
      icon: <StoreIcon className="text-white" />
    },
    {
      link: "/Whitepaper",
      name: "Whitepaper",
      icon: <BookIcon className="text-white" />
    }  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className="nav-logo-container">
            <a href="/" alt="home">
              <img src={logo} alt="" className="nav-logo" />
            </a>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
              Fetti&nbsp;
            </Typography>
            
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              Ecosystem
            </Typography>

          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  //if(element.name === "DAO" || element.name === "Marketplace"){
                  if(element.name === "DAO"){
                    return (
                      <a
                        href={element.link}
                        className={classes.noDecoration}
                        onClick={handleMobileDrawerClose}
                        target="_blank"
                      >
                        <Button
                          color="secondary"
                          size="large"
                          classes={{ text: classes.menuButtonText }}
                        >
                          {element.name}
                        </Button>
                      </a>
                    );

                  }
                  else 
                  {
                    return (
                      <Link
                        key={element.name}
                        to={element.link}
                        className={classes.noDecoration}
                        onClick={handleMobileDrawerClose}
                      >
                        <Button
                          color="secondary"
                          size="large"
                          classes={{ text: classes.menuButtonText }}
                        >
                          {element.name}
                        </Button>
                      </Link>
                    );
                  }
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
