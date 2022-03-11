import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth, withStyles, Typography } from "@material-ui/core";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";

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


function Ark(props) {
  const { classes, width, selectArk } = props;
  useEffect(() => {
    selectArk();
  }, [selectArk]);

  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
    </Fragment>
  );
}

Ark.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectArk: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Ark));
