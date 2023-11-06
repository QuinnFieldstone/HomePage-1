/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ComercialShopping } from "../ComercialShopping";
import "./style.css";

export const PropertyWrapper = ({ property1, className, element = "/img/0-1-6.png" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "variant-2",
  });

  return (
    <div
      className={`property-wrapper ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "variant-2" && <img className="element" alt="Element" src={element} />}

      {state.property1 === "option-2" && (
        <>
          <div className="overlap-4">
            <div className="comercial-shopping-wrapper">
              <ComercialShopping
                className="comercial-shopping-instance"
                style="outlined"
                styleOutlined="/img/comercial-shopping-basket.png"
              />
            </div>
            <div className="add-to-wish-list">
              <img
                className="interface-essential-2"
                alt="Interface essential"
                src="/img/interface-essential-heart.png"
              />
            </div>
          </div>
          <div className="overlap-group-4">
            <p className="text-wrapper-29">Visionary Brew Magic Mushroom Tea</p>
            <div className="text-wrapper-30">$25</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "option-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

PropertyWrapper.propTypes = {
  property1: PropTypes.oneOf(["option-2", "variant-2"]),
  element: PropTypes.string,
};
