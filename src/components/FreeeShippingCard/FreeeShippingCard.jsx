/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComercialDelivery } from "../ComercialDelivery";
import "./style.css";

export const FreeeShippingCard = ({ className, comercialDeliveryStyleOutlined }) => {
  return (
    <div className={`freee-shipping-card ${className}`}>
      <div className="overlap-group-2">
        <div className="rectangle-2" />
        <div className="free-express">
          Free Express
          <br />
          Shipping
        </div>
        <p className="orders-above">
          <span className="text-wrapper-4">Orders above </span>
          <span className="text-wrapper-5">$150</span>
        </p>
        <div className="text-wrapper-6">Discreet, Undetectable</div>
        <div className="delivery-van">
          <div className="rectangle-3" />
          <ComercialDelivery
            className="comercial-delivery-instance"
            style="outlined"
            styleOutlined={comercialDeliveryStyleOutlined}
          />
        </div>
      </div>
    </div>
  );
};

FreeeShippingCard.propTypes = {
  comercialDeliveryStyleOutlined: PropTypes.string,
};
