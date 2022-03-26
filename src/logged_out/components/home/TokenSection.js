import React from "react";
import PropTypes from "prop-types";
import { Grid, Box,Typography, isWidthUp, withWidth } from "@material-ui/core";
import calculateSpacing from "./calculateSpacing";
import DoughnutChart from "./DoughnutChart";

const iconSize = 250;

const features = [
  {
    name: "",
    tokenAmount: 0,
    percentage:0
  },
  {
    name: "",
    tokenAmount: 0,
    percentage:0

  },
  {
    name: "",
    tokenAmount: 0,
    percentage:0

  },
  {
    name: "",
    tokenAmount: 0,
    percentage:0
  },
  {
    name: "",
    tokenAmount: 0,
    percentage:0
  },
  {
    name: "",
    tokenAmount: 0,
    percentage:0
  },
];

function TokenSection(props) {
  const { width } = props;
  return (
    <div id="Tokenomics" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
      <Typography variant="h3" align="center" className="lg-mg-bottom">
          Tokenomics
        </Typography>
        <Typography variant="h4" align="center" className="lg-mg-bottom">
          18 Billion Total Supply
        </Typography>
        <div className="container-fluid" id="TokenSection">
          <Box mb={12}>
            <DoughnutChart />
          </Box>
        </div>
      </div>
    </div>
  );
}

TokenSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(TokenSection);
