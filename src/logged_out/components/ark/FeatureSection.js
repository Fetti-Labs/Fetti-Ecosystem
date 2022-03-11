import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import StoreIcon from '@mui/icons-material/Store';
import ApiIcon from '@mui/icons-material/Api';

const iconSize = 250;

const features = [
  {
    color: "#234531",
    headline: "Fetti DAO",
    text:
      "The Fetti DAO is the organizations entire governance sector where all the big decisions get made",
    icon: <AdminPanelSettingsIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0", 
    Link: "https://dao-beta.mango.markets/dao/DgeDDRXFDTKvuZorMG4BRHRsycy7vCSAk9mHEqkNurWx"
  },
  {
    color: "#234531",
    headline: "Fetti Swap",
    text:
      "Fetti Swap is where Fetti tokens can be exchanged for other cryptocurrencies",
    icon: <SwapVerticalCircleIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200", 
    Link: "/Swap"

  },
  {
    color: "#234531",
    headline: "Fetti Life Marketplace",
    text:
      "The Fetti Life Marketplace is where all the opportunities to provide good deeds and services Will be located.",
    icon: <StoreIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0", 
    Link: "/Marketplace"

  },
  {
    color: "#234531 ",
    headline: "Investor Pre-Launch NFT Project",
    text:
      "Fetti is creating a set of NFTs that will represent the ecosystems first round of funding. These NFTs provide access to the DAO by granting governance privilages",
    icon: <ApiIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200", 
    Link: ""

  },
 // {
 //   color: "#DD2C00",
 //   headline: "Feature 5",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <BarChartIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "200",
 //   smDelay: "0"
 // },
 // {
 //   color: "#64DD17",
 //   headline: "Feature 6",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "400",
 //   smDelay: "200"
 // },
 // {
 //   color: "#304FFE",
 //   headline: "Feature 7",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <CloudIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "0",
 //   smDelay: "0"
 // },
 // {
 //   color: "#C51162",
 //   headline: "Feature 8",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <CodeIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "200",
 //   smDelay: "200"
 // },
 // {
 //   color: "#00B8D4",
 //   headline: "Feature 9",
 //   text:
 //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
 //   icon: <CancelIcon style={{ fontSize: iconSize }} />,
 //   mdDelay: "400",
 //   smDelay: "0"
 // }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div id="Ecosystem" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <div className="container-fluid" id="FeatureSection">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          A.R.K. PROTOCOL
          <Typography
          variant={isWidthUp("lg", width) ? "h6" : "body1"}
          color="textSecondary"
        >
          Check back soon.
        </Typography>
        </Typography>


{
  /*          
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (

              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >

                
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                  Link={element.Link}
                />

              </Grid>
            ))}
          </Grid>
*/
}
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
