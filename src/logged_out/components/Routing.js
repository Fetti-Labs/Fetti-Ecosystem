import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Whitepaper from "./whitepaper/Whitepaper";
import Swap from "./swap/Swap";
import Market from "./market/Market";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const { selectMarket, selectWhite, selectSwap, selectHome } = props;
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
        path="/" 
        component={Home} 
        selectHome={selectHome} 
      />
    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default memo(Routing);
