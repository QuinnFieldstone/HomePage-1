/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ComercialShopping = ({ style, className, styleOutlined = "/img/style-outlined.png" }) => {
  return (
    <img
      className={`comercial-shopping style-1-${style} ${className}`}
      alt="Style filled"
      src={style === "outlined" ? styleOutlined : "/img/style-filled.png"}
    />
  );
};

ComercialShopping.propTypes = {
  style: PropTypes.oneOf(["outlined", "filled"]),
  styleOutlined: PropTypes.string,
};
