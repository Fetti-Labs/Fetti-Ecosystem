import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div id="TeamSection" className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Meet The Team
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Joseph Piccolo"
              jobTitle={
                <span>
                  <Typography display="inline"> Co-Founder And CEO</Typography>
                </span>
              }
              features={["Dedicated to making the lives of the people I love easier in any way","Loves the outdoors"]}
              ImgLink="https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry"
              TwitterLink="https://twitter.com/JosephPiccolo4"
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={6}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              title="Vincent Testa"
              jobTitle={
                <span>
                  <Typography display="inline">Co-Founder And CTO</Typography>
                </span>
              }
              features={["Passionate self Starter","Determined to see the Fetti Ecosystem become a world wide community"]}
              ImgLink="https://pbs.twimg.com/profile_images/1499388366449786880/xH9EOBky_400x400.jpg"
              TwitterLink="https://twitter.com/Eatmyunicorn318"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Shelden Lewis"
              jobTitle={
                <span>
                  <Typography display="inline">Graphic Artist</Typography>
                </span>
              }
              features={["Hobbies: Involuntary Yoga, Spending too much time in front of a dimly lit screen","Draws things"]}
              ImgLink="https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry"
              TwitterLink="/"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
            
          >
            <PriceCard
              
              title="We're Hiring! | This Could be you!"
              jobTitle={
                <span>
                  <Typography display="inline">Your Title!</Typography>
                </span>
              }
              features={["Looking for a good fit in the world of Web3?"]}
              ImgLink="https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry"
              TwitterLink="/"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
