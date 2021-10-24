import React from "react";

import classes from "./CustomButton.module.css";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? classes["google-sign-in"] : ""} ${
        classes["custom-button"]
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
