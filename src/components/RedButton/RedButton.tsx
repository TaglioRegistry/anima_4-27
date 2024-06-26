/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
  text: string;
}

export const RedButton = ({ className, divClassName, text = "Edit" }: Props): JSX.Element => {
  return (
    <button className={`red-button ${className}`}>
      <div className={`edit ${divClassName}`}>{text}</div>
    </button>
  );
};

RedButton.propTypes = {
  text: PropTypes.string,
};
