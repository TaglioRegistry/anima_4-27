/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  text: string;
}

export const FormBox = ({ className, text = "Issuer" }: Props): JSX.Element => {
  return (
    <div className={`form-box ${className}`}>
      <input className="auto-layout" />
      <div className="issuer">{text}</div>
    </div>
  );
};

FormBox.propTypes = {
  text: PropTypes.string,
};
