import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Whitepaper from "./whitepaper/Whitepaper";
import Swap from "./swap/Swap";
import Market from "./market/Market";
import Ark from "./ark/Ark";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";


function Routing(props) {
  const { selectMarket, selectWhite, selectSwap, selectHome, selectArk } = props;
  useLocationBlocker();
  return (
    <Switch>
      <PropsRoute
        path="/Whitepaper"
        component={Whitepaper}
        selectWhite={selectWhite} 
      />
      <PropsRoute
        path="/Swap"
        component={Swap}
        selectSwap={selectSwap} 
      />
      <PropsRoute
        path="/Marketplace"
        component={Market}
        selectMarket={selectMarket} 
      />
      <PropsRoute 
        path="/ARK" 
        component={Ark} 
        selectArk={selectArk} 
      />
      {
      /*
  
      <PropsRoute 
        path="/Winners" 
        component={Winners} 
        selectArk={selectWinners} 
      />

      */
      }
      <PropsRoute 
        path="/" 
        component={Home} 
        selectHome={selectHome} 
      />

    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectMarket: PropTypes.func.isRequired,
  selectWhite: PropTypes.func.isRequired,
  selectSwap: PropTypes.func.isRequired,
  selectArk: PropTypes.func.isRequired,
};

export default memo(Routing);
