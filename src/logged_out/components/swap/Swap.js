import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, withWidth, withStyles, Typography } from "@material-ui/core";

const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});


function Swap(props) {
  const { classes, selectSwap } = props;
  useEffect(() => {
    selectSwap(); 
  }, [selectSwap]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className="Swap-Container">
        <Grid container spacing={3}>
          <div className="container-fluid lg-p-top">
            <Typography variant="h3" align="center" className="lg-mg-bottom">
              Fetti Swap Coming Soon! 
            </Typography>
          </div>
        </Grid>
      </div>
    </Box>
  );
}

Swap.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectSwap: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Swap));
