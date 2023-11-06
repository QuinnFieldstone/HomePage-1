/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowsChevron } from "../ArrowsChevron";
import { PropertyWrapper } from "../PropertyWrapper";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <PropertyWrapper className="frame-instance" element="/img/0-1-6.png" property1="variant-2" />
      <PropertyWrapper className="frame-6-instance" element="/img/0-1-1-2.png" property1="variant-2" />
      {state.property1 === "default" && (
        <>
          <PropertyWrapper className="instance-node" element="/img/image.png" property1="variant-2" />
          <PropertyWrapper className="frame-7" element="/img/0-1-3-2.png" property1="variant-2" />
        </>
      )}

      {state.property1 === "variant-2" && (
        <div className="overlap-group-5">
          <PropertyWrapper className="frame-8" element="/img/image.png" property1="variant-2" />
          <PropertyWrapper className="frame-9" element="/img/0-1-3-2.png" property1="variant-2" />
          <div className="arrows-chevron-wrapper">
            <ArrowsChevron
              className="arrows-chevron-chevron-right"
              style="filled"
              styleFilled="/img/arrows-chevron-chevron-right.png"
            />
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
