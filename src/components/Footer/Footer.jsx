/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Outlined } from "../Outlined";
import "./style.css";

export const Footer = ({ className, text = "Mushroom Species", text1 = "Mirodosing Capsules", lineClassName }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-3">
          <div className="text-wrapper-14">Follow Us</div>
          <div className="copyright-three">Copyright @ 2023&nbsp;&nbsp;Three Amigos</div>
          <div className="terms-conditions">Terms &amp; Conditions</div>
          <div className="text-wrapper-15">Privacy Policy</div>
          <div className="text-wrapper-16">Sales and Refuds</div>
          <div className="text-wrapper-17">Interested Links</div>
          <div className="mushroom-species">{text}</div>
          <div className="text-wrapper-18">Cannabises Strains</div>
          <div className="text-wrapper-19">FAQ</div>
          <div className="text-wrapper-20">Blog</div>
          <div className="mirodosing-capsules">{text1}</div>
          <div className="text-wrapper-21">Hybrid</div>
          <div className="text-wrapper-22">Dried Magic Mashrooms</div>
          <div className="text-wrapper-23">Sativa</div>
          <div className="text-wrapper-24">Edibles</div>
          <div className="text-wrapper-25">Indica</div>
          <div className="text-wrapper-26">Teas</div>
          <div className="text-wrapper-27">Coupons</div>
          <div className="text-wrapper-28">Contact</div>
          <img className={`line ${lineClassName}`} alt="Line" src="/img/line-1.png" />
          <img className="positivessl" alt="Positivessl" src="/img/positivessl-sectigotag-300dpi-1.png" />
          <div className="interface-essential-wrapper">
            <Outlined className="outlined-instance" outlined="/img/interface-essential-facebook.png" />
          </div>
          <div className="icon-wrapper">
            <img className="icon" alt="Icon" src="/img/icon.png" />
          </div>
          <div className="rectangle-4" />
          <div className="rectangle-5" />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
