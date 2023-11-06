/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Outlined = ({ className, outlined = "/img/outlined.png" }) => {
  return <img className={`outlined ${className}`} alt="Outlined" src={outlined} />;
};

Outlined.propTypes = {
  outlined: PropTypes.string,
};
