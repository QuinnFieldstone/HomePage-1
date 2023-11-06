/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ArrowsChevron = ({ style, className, styleFilled = "/img/style-filled-3.png" }) => {
  return (
    <img
      className={`arrows-chevron ${className}`}
      alt="Style outlined"
      src={style === "filled" ? styleFilled : "/img/style-outlined-3.png"}
    />
  );
};

ArrowsChevron.propTypes = {
  style: PropTypes.oneOf(["filled", "outlined"]),
  styleFilled: PropTypes.string,
};
