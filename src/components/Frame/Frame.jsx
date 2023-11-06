/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Frame = ({
  property1,
  className,
  wavyzX = "/img/wavyz3-1-300x300-1.png",
  text = "Dried Magic<br/>Mushrooms",
  driedMagicClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "default" && (
        <>
          <div className="wavyz-x-wrapper">
            <img className="wavyz-x" alt="Wavyz x" src={wavyzX} />
          </div>
          <div className={`dried-magic ${driedMagicClassName}`}>{text}</div>
          <div className="hover-item">
            <div className="group">
              <div className="div-wrapper">
                <div className="text-wrapper-9">Shop Now</div>
              </div>
            </div>
          </div>
        </>
      )}

      {state.property1 === "variant-2" && (
        <div className="overlap-3">
          <div className="wavyz-x-wrapper">
            <img className="wavyz-x" alt="Wavyz x" src="/img/wavyz3-1-300x300-1.png" />
          </div>
          <div className="dried-magic">{text}</div>
          <div className="group-wrapper">
            <div className="group">
              <div className="div-wrapper">
                <div className="text-wrapper-9">Shop Now</div>
              </div>
            </div>
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

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  wavyzX: PropTypes.string,
  text: PropTypes.string,
};
