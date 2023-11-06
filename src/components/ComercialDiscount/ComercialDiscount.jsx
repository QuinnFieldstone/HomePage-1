/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ComercialDiscount = ({ style, className, styleOutlined = "/img/style-outlined-5.png" }) => {
  return (
    <img
      className={`comercial-discount style-${style} ${className}`}
      alt="Style filled"
      src={style === "outlined" ? styleOutlined : "/img/style-filled-5.png"}
    />
  );
};

ComercialDiscount.propTypes = {
  style: PropTypes.oneOf(["outlined", "filled"]),
  styleOutlined: PropTypes.string,
};
