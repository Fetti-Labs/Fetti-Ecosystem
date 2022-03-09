import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth, withStyles, Typography } from "@material-ui/core";

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


function Market(props) {
  const { classes, width, selectMarket } = props;
  useEffect(() => {
    selectMarket();
  }, [selectMarket]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className="Market-Container">
        <Grid container spacing={3}>
          <div className="container-fluid lg-p-top">
            <Typography variant="h3" align="center" className="lg-mg-bottom">
              Fetti Market is Coming Soon! 
            </Typography>
          </div>
        </Grid>
      </div>
    </Box>
  );
}

Market.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectMarket: PropTypes.func.isRequired

};

export default withWidth()(withStyles(styles, { withTheme: true })(Market));
