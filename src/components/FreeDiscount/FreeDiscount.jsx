/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComercialDiscount } from "../ComercialDiscount";
import "./style.css";

export const FreeDiscount = ({ className, comercialDiscountStyleOutlined }) => {
  return (
    <div className={`free-discount ${className}`}>
      <div className="overlap">
        <div className="rectangle" />
        <div className="dicount-icon">
          <div className="overlap-group">
            <div className="div" />
            <ComercialDiscount
              className="comercial-discount-2"
              style="outlined"
              styleOutlined={comercialDiscountStyleOutlined}
            />
          </div>
        </div>
        <p className="get-off-your">
          Get 20% Off
          <br />
          Your 1st Order
        </p>
        <p className="you-get-over">
          <span className="text-wrapper">You get over </span>
          <span className="span">$99</span>
        </p>
        <div className="text-wrapper-2">Coupon Code</div>
        <div className="coupon-code">
          <div className="text-wrapper-3">FIRST20</div>
        </div>
      </div>
    </div>
  );
};

FreeDiscount.propTypes = {
  comercialDiscountStyleOutlined: PropTypes.string,
};
