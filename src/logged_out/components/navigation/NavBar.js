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
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import StoreIcon from '@mui/icons-material/Store';
import CodeIcon from "@material-ui/icons/Code";


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

function LogoImg(){
  return(
    
<svg width="250" height="250" viewBox="0 0 100 100" class="css-1j8o68f">
    <defs id="SvgjsDefs2465"></defs>
    <g id="SvgjsG2466" featurekey="uHI19F-0" transform="matrix(0.14245014245014245,0,0,0.14245014245014245,0.14245014245014245,0.14245014245014245)" fill="#234531">
        <g xmlns="http://www.w3.org/2000/svg">
            <title>background</title>
            <rect x="-1" y="-1" width="702" height="702" style="fill: none;"></rect>
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
            <title>Layer 1</title>
            <g>
                <g>
                    <path d="M222,158.3c-31,0.7-57.5,21-79.5,60.8c-23.1,44.8-34.5,94.6-34.3,149.4c0.4,6.6,1.1,7.2,2.2,1.9     c9.3-40.3,19-71.8,29.1-94.6c9.9-22.9,20.9-41.7,32.9-56.2c27.6-32.1,51.5-37.3,71.8-15.6c22.2,25.6,34,68.8,35.4,129.4     c-1.2,81.5-11.9,143.1-32.1,185c-25.3,51-51.3,68-77.7,50.8c-36-28.7-56-92.3-60-190.6c-1.4-3.4-2.7-0.9-3.7,7.5     c-1.9,10.2-3.2,21.4-4,33.3c-3,53.4,4.1,98.7,21.2,135.9c17.5,35.3,40.8,53.2,69.9,53.8c31.4-0.5,60-21,85.9-61.7     c25.8-42.5,42.4-94.3,49.7-155.6c2.7-65.2-6.1-120.7-26.3-166.5c-20.4-43.6-47.1-66-80-67.2"></path>
                </g>
                <g>
                    <path d="M452,134.1c-16.1-26.4-46.9-39.3-92.4-38.5c-50.3,2.4-99.2,17.4-146.6,45c-5.5,3.6-5.7,4.6-0.6,2.9     c39.6-12.1,71.7-19.5,96.4-22.1c24.8-2.9,46.5-2.8,65.1,0.4c41.6,7.9,58.1,26,49.4,54.4c-11.1,32-42.6,63.8-94.4,95.4     c-71.2,39.7-129.9,61.3-176.2,64.7c-56.9,3.6-84.5-10.4-82.8-41.9C77,248.8,122,199.7,205.1,147c2.2-2.9-0.6-2.7-8.3,0.6     c-9.8,3.5-20.1,7.9-30.9,13.2c-47.7,24.1-83.5,52.9-107.1,86.3c-21.8,32.8-25.7,62-11.7,87.4c16.1,26.9,48.2,41.4,96.4,43.5     c49.7,1.1,102.9-10.4,159.6-34.8c57.8-30.3,101.5-65.6,131-106c27.6-39.5,33.6-73.8,18.2-102.9"></path>
                </g>
                <g>
                    <path d="M588,321.2c14.8-27.2,10.6-60.3-12.9-99.3c-27.3-42.4-64.7-77.2-112.3-104.4c-5.9-3-6.8-2.7-2.8,0.9     c30.3,28.2,52.7,52.4,67.4,72.4c14.9,20.1,25.7,38.9,32.2,56.6c14,40,6.5,63.3-22.4,69.9c-33.3,6.4-76.5-5-129.8-34     c-69.9-41.8-118-81.9-144.2-120.2c-31.5-47.5-33.2-78.4-5.1-92.7c42.9-16.8,107.9-2.3,195.1,43.4c3.6,0.4,2.1-1.9-4.7-6.9     c-7.9-6.8-16.9-13.5-26.9-20.2c-44.7-29.3-87.5-45.8-128.3-49.6c-39.3-2.5-66.5,8.7-81.6,33.6c-15.3,27.4-11.8,62.5,10.5,105.2     c23.9,43.6,60.5,83.9,109.9,120.8c55.1,34.9,107.6,55.1,157.3,60.4c48,4.1,80.8-7.8,98.2-35.7"></path>
                </g>
                <g>
                    <path d="M494,532.5c31-0.7,57.5-21,79.5-60.8c23.1-44.8,34.5-94.6,34.3-149.4c-0.4-6.6-1.1-7.2-2.2-1.9     c-9.3,40.3-19,71.8-29.1,94.6c-9.9,22.9-20.9,41.7-32.9,56.2c-27.6,32.1-51.5,37.3-71.8,15.6c-22.2-25.6-34-68.8-35.4-129.4     c1.2-81.5,11.9-143.1,32.1-185c25.3-51,51.3-68,77.7-50.8c36,28.7,56,92.3,60,190.6c1.4,3.4,2.7,0.9,3.7-7.5     c1.9-10.2,3.2-21.4,4-33.3c3-53.4-4.1-98.7-21.2-135.9c-17.5-35.3-40.8-53.2-69.9-53.8c-31.4,0.5-60,21-85.9,61.7     c-25.8,42.5-42.4,94.3-49.7,155.6c-2.7,65.2,6.1,120.7,26.3,166.5c20.4,43.6,47.1,66,80,67.2"></path>
                </g>
                <g>
                    <path d="M128,369.6c-14.8,27.2-10.6,60.3,12.9,99.3c27.3,42.4,64.7,77.2,112.3,104.4c5.9,3,6.8,2.7,2.8-0.9     c-30.3-28.2-52.7-52.4-67.4-72.4c-14.9-20.1-25.7-38.9-32.2-56.6c-14-40-6.5-63.3,22.4-69.9c33.3-6.4,76.5,5,129.8,34     c69.9,41.8,118,81.9,144.2,120.2c31.5,47.5,33.2,78.4,5.1,92.7c-42.9,16.8-107.9,2.3-195.1-43.4c-3.6-0.4-2.1,1.9,4.7,6.9     c7.9,6.8,16.9,13.5,26.9,20.2c44.7,29.3,87.5,45.8,128.3,49.6c39.3,2.5,66.5-8.7,81.6-33.6c15.3-27.4,11.8-62.5-10.5-105.2     c-23.9-43.6-60.5-83.9-109.9-120.8c-55.1-34.9-107.6-55.1-157.3-60.4c-48-4.1-80.8,7.8-98.2,35.7"></path>
                </g>
                <g>
                    <path d="M264,556.7c16.1,26.4,46.9,39.3,92.4,38.5c50.3-2.4,99.2-17.4,146.6-45c5.5-3.6,5.7-4.6,0.6-2.9     c-39.6,12.1-71.7,19.5-96.4,22.1c-24.8,2.9-46.5,2.8-65.1-0.4c-41.6-7.9-58.1-26-49.4-54.4c11.1-32,42.6-63.8,94.4-95.4     c71.2-39.7,129.9-61.3,176.2-64.7c56.9-3.6,84.5,10.4,82.8,41.9c-6.9,45.5-51.9,94.6-135.1,147.3c-2.2,2.9,0.6,2.7,8.3-0.6     c9.8-3.5,20.1-7.9,30.9-13.2c47.7-24.1,83.5-52.9,107.1-86.3c21.8-32.8,25.7-62,11.7-87.4c-16.1-26.9-48.2-41.4-96.3-43.5     c-49.7-1.1-102.9,10.4-159.6,34.8c-57.8,30.3-101.5,65.6-131,106c-27.6,39.5-33.6,73.8-18.2,102.9"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
    
  );
}


function NavBar(props) {
  const logo = "/logo.svg";
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/ARK",
      name: "A.R.K.",
      icon: <CodeIcon className="text-white" />
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
    },    
  //  {
  //    link: "/Winners",
  //    name: "Giveaway Winners",
  //    icon: <BookIcon className="text-white" />
  //  },
    {
      link: "https://dao-beta.mango.markets/dao/DgeDDRXFDTKvuZorMG4BRHRsycy7vCSAk9mHEqkNurWx",
      name: "DAO",
      icon: <AdminPanelSettingsIcon className="text-white" />
    },

  
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className="nav-logo-container">
            <a href="/" alt="home">
              {<img src={logo} alt="" className="nav-logo" />}
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
