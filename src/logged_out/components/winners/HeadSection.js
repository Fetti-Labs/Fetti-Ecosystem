import React, {Fragment} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  TextField
} from "@material-ui/core";

import { Link } from "react-router-dom";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import json from "./recipients.json";
import jsonwins from "./winners.json";
import jsonloss from "./losers.json";


const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});
const walletKey = "";

function hasMatch(obj, match){
  var hasMatch =false;
  for (var x = 0; x < obj.length; ++x) {

    var winner = obj[x];

    if(winner == match){
      hasMatch = true;
      console.log("match");
      break;
    }
  }
  if(hasMatch)
  {
    return true;
  }
  
  return false;
}



function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div id="HeadSection" className={classNames("lg-p-top", classes.wrapper)}>
        <div 
          className={classNames("container-fluid", classes.container)} 
        >
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={12}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box 
                        mb={4}
                        textAlign="center"  
                      >
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          Congratulations to our Winners!
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Thank you all for participating in our FIRST EVER Giveaway! Please use the form 
                            below to check to see if you are a winner and register for the airdop. 


                          </Typography>
                        </Box>
                        <Box mb={2}>

                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          label="Public Key"
                          inputRef={walletKey}
                          autoFocus
                          autoComplete="off"
                          type="text"
                        />         
                          <Button
                            onClick={() => {
                              const val = document.querySelector('input').value;
                              if (val === "") {
                                console.log("no value");
                                return;
                              }
                              
                              const winners = json.winner;
                            
                              console.log(val);
                            
                              var win = false;
                              for (let i = 0; i < winners.length; i++) 
                                if (winners[i].toString() === val) win = true;
                              
                              if (win === true) {
                                console.log("win === true");
                                
                                
 
                                
                              } else {
                                
                                //write to losers.json
                                console.log("loser");


                              }
                              

                              
                            }}
                            variant="contained"
                            color="secondary"
                          >
                            Check Winner 
                          </Button>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>

    </Fragment>
  );
}
// <WaveBorder
//  upperColor={theme.palette.secondary.main}
//  lowerColor="#FFFFFF"
//  className={classes.waveBorder}
//  animationNegativeDelay={2}
// />
HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
