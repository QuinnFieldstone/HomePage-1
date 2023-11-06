/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComercialShopping } from "../ComercialShopping";
import { InterfaceEssential } from "../InterfaceEssential";
import { UserPerson } from "../UserPerson";
import "./style.css";

export const MainTopNav = ({
  className,
  interfaceEssentialStyleOutlined,
  userPersonStyleOutlined,
  comercialShoppingStyleOutlined,
}) => {
  return (
    <div className={`main-top-nav ${className}`}>
      <div className="frame-2">
        <img className="layer" alt="Layer" />
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <div className="text-wrapper-10">
              <button
          type="button"
          className="btn btn-primary"

        >
          MARIJUANA
                  </button></div>
              <div className="text-wrapper-10">
              <button
          type="button"
          className="btn btn-primary"

        >
          MUSHROOM
                  </button></div>
            </div>
            <div className="search">
              <div className="text-wrapper-11">What do you want</div>
              <InterfaceEssential
                className="design-component-instance-node"
                style="outlined"
                styleOutlined={interfaceEssentialStyleOutlined}
              />
            </div>
          </div>
          <div className="account-sign-in">
            <UserPerson
              className="design-component-instance-node"
              style="outlined"
              styleOutlined={userPersonStyleOutlined}
            />
            <div className="text-wrapper-12">
            <button
          type="button"
          className="btn btn-primary"

        >
          Sign In
                  </button></div>
          </div>
        </div>
      </div>
      <div className="frame-6">
        <div className="cart">
          <ComercialShopping
            className="comercial-shopping-basket"
            style="outlined"
            styleOutlined={comercialShoppingStyleOutlined}
          />
        </div>
        <img className="wish-list" alt="Wish list" />
      </div>
    </div>
  );
};

MainTopNav.propTypes = {
  interfaceEssentialStyleOutlined: PropTypes.string,
  userPersonStyleOutlined: PropTypes.string,
  comercialShoppingStyleOutlined: PropTypes.string,
};
