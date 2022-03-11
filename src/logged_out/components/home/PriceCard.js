import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.primary.main
  }
});

function PriceCard(props) {
  const { classes, theme, title, jobTitle, features, highlighted, ImgLink, TwitterLink } = props;
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>        
      <a href={TwitterLink} target="_blank" className="TeamLink">
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h5" : "h6"}
          className={highlighted ? "text-white" : classes.title}
        >
          {title}
        </Typography>
      </Box>
      <Box mb={2}>
          <img src={ImgLink} alt="" className="TeamImage" />
      </Box>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h3" : "h4"}
          className={highlighted ? "text-white" : null}
        >
          {jobTitle}
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Box display="flex" alignItems="center" mb={1} key={index}>
          <CheckIcon
            style={{
              color: highlighted
                ? theme.palette.common.white
                : theme.palette.primary.dark
            }}
          />
          <Box ml={1}>
            <Typography
              className={highlighted ? "text-white" : null}
              variant={highlighted ? "h6" : "body1"}
            >
              {feature}
            </Typography>
          </Box>
        </Box>
      ))}
      </a>
    </div>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(PriceCard);
