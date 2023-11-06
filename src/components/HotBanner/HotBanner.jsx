/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const HotBanner = ({ className }) => {
  return (
    <div className={`hot-banner ${className}`}>
      <div className="overlap-2">
        <img className="img" alt="Rectangle" />
        <p className="p">“Psychedelics prove to you that there’s more than one way of seeing the world”</p>
        <button className="button">
          <div className="text-wrapper-7">Shop Now</div>
        </button>
        <div className="text-wrapper-8">Jesse Lawler</div>
        <div className="pignation">
          <div className="ellipse-wrapper">
            <div className="ellipse" />
          </div>
          <div className="ellipse-2" />
          <div className="ellipse-3" />
        </div>
      </div>
    </div>
  );
};
