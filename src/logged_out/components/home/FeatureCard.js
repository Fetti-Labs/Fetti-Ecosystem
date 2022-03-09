import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles, Button } from "@material-ui/core";

const styles = theme => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5
  }
});

function shadeColor(hex, percent) {
  const f = parseInt(hex.slice(1), 16);

  const t = percent < 0 ? 0 : 255;

  const p = percent < 0 ? percent * -1 : percent;

  const R = f >> 16;

  const G = (f >> 8) & 0x00ff;

  const B = f & 0x0000ff;
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`;
}

function IconContainer(props){
  const { classes, Icon, color, headline, text, Link } = props;

  if(Link != ""){
    const target = (headline == "Fetti DAO") ? "_blank" : "";
    return (
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.extraLargeButton}
        classes={{ label: classes.extraLargeButtonLabel }}
        className={classes.iconWrapper}
        style={{
          color: color,
          backgroundColor: shadeColor(color, 0.5),
          fill: color,
          width:"100%",
          borderRadius:"25px",
        }}
        href={Link}
        target={target}
      >
        {Icon}
      </Button>
    );
  } else {
    return (
      <div
        // We will set color and fill here, due to some prios complications
        className={classes.extraLargeButton}
        classes={{ label: classes.extraLargeButtonLabel }}
        className={classes.iconWrapper}
        style={{
          color: color,
          backgroundColor: shadeColor(color, 0.5),
          fill: color,
          width:"100%",
          borderRadius: "25px"
        }}
      >
        {Icon}
      </div>
    );
  }
}

function FeatureCard(props) {
  const { classes, Icon, color, headline, text, Link } = props;
  return (
    <Fragment>
      {IconContainer(props)}
      <Typography variant="h5" paragraph>
        {headline}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
    </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
