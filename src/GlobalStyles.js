import { withStyles } from "@material-ui/core";

const styles = theme => ({
  "@global": {
    /**
     * Disable the focus outline, which is default on some browsers like
     * chrome when focusing elements
     */
    "*:focus": {
      outline: 0
    },
    ".text-white": {
      color: theme.palette.common.white
    },
    ".listItemLeftPadding": {
      paddingTop: `${theme.spacing(1.75)}px !important`,
      paddingBottom: `${theme.spacing(1.75)}px !important`,
      paddingLeft: `${theme.spacing(4)}px !important`,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: `${theme.spacing(4)}px !important`
      },
      "@media (max-width:  420px)": {
        paddingLeft: `${theme.spacing(1)}px !important`
      }
    },
    ".nav-logo-container": {
      display:"inline-flex",
      alignItems: "center",
    },
    ".nav-logo": {
      height: "60px",
      width: "auto",
      marginRight: "15px",
      display:"block",
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170
      }
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2)
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370
    },
    ".lg-mg-top": {
      marginTop: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginTop: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: `${theme.spacing(16)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: `${theme.spacing(14)}px !important`
      }
    },
    ".lg-mg-bottom": {
      marginBottom: `${theme.spacing(10)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(5)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(5)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(5)}px !important`
      }
    },
    ".lg-p-top": {
      paddingTop: `${theme.spacing(10)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(5)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(5)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(5)}px !important`
      }
    },
    "#HeadSection": {
      backgroundRepeat: 'no-repeat !important',
      backgroundSize: "cover !important",
      marginBottom : "0px !important",
      backgroundColor: "#234531",
      backgroundImage: "linear-gradient(180deg, #234531 7%, #000000 15%,#000000 50%,#000000 85%, #234531 115%)",
    },

    "[data-aos^=zoom][data-aos^=zoom].aos-animate": {
      opacity: ".98 !important",
    },
    "#Zoom-Image": {
      background: "url(https://surrey-research-park.com/wp-content/uploads/blockchain.png)",
      backgroundSize: "cover",
      borderRadius: "25px",
    },
 
    "#FeatureSection":{
      textAlign: "center",
    },
    ".TeamImage":{
    maxWidth: "200px",
    width: "100%",
    height: "auto",
    },
    ".TeamLink": {
      color: "inherit",
      textDecoration: "none",
    },
    "footer.lg-p-top":{
      marginBottom: "0px !important",
      paddingTop: "0px !important",
      background: "linear-gradient(180deg, #234531 0%, #000000 10%,#000000 50%,#000000 90%, #234531 115%) !important",
    },
    "footer.lg-p-top div": {
      background: "none",
    },
    ".MuiPaper-rounded":{
      borderRadius:"25px !important"
    },
    ".MuiTypography-h3":{
      fontSize:"4em  !important",
      fontWeight:"normal  !important",
      fontFamily: "'Baloo Bhaijaan', cursive  !important",
    },
    "#HeadSection h4.MuiTypography-root.MuiTypography-h4, #HeadSection h3.MuiTypography-root.MuiTypography-h3": {
      fontFamily: "'Baloo Bhaijaan', cursive !important",
      fontWeight: "400 !important",
      color: "#234531 !important",
    },
    "#Ecosystem h4.MuiTypography-root.MuiTypography-h4, #Ecosystem h3.MuiTypography-root.MuiTypography-h3": {
      fontFamily: "'Baloo Bhaijaan', cursive !important",
      fontWeight: "400 !important",
      color: "#234531 !important",
    },
    "#TeamSection h4.MuiTypography-root.MuiTypography-h4, #TeamSection h3.MuiTypography-root.MuiTypography-h3": {
      fontFamily: "'Baloo Bhaijaan', cursive !important" ,
      fontWeight: "400 !important",
      color: "#234531 !important",
    },
    "#Tokenomics h4.MuiTypography-root.MuiTypography-h4, #Tokenomics h3.MuiTypography-root.MuiTypography-h3": {
      fontFamily: "'Baloo Bhaijaan', cursive !important" ,
      fontWeight: "400 !important",
      color: "#234531 !important",
    },
    "text": {
      fontFamily: "'Baloo Bhaijaan', cursive !important" ,
      fontWeight: "100 !important",
      color: "#234531 !important",
      fill: "#234531 !important",
    },
    ".jss12": {
      [theme.breakpoints.down("sm")]: {
        maxWidth: "500px"
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "500px"
      }    
    },
    ".MuiTypography-paragraph, .MuiTypography-colorTextSecondary, .MuiTypography-h6, .MuiTypography-body1, .MuiButton-label, .MuiInputBase-input, button": {
      fontFamily: "'Baloo Bhaijaan', cursive !important",
    },
    ".MuiButton-textSizeLarge": {
      fontSize: "1.7em !important",
    },
    "body": {
      backgroundColor: "rgb(36, 40, 44) !important",
    },
    "#TeamSection" : {
      marginBottom: "40px",
    },
    "div#Ecosystem": {
      backgroundColor: "#234531",
      backgroundImage: "linear-gradient(180deg, #112218 0.4%, #fff 1%,#fff 50%)",
    },
    ".canvasjs-chart-credit" : {
        display:"none !important"
    },
  }
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
