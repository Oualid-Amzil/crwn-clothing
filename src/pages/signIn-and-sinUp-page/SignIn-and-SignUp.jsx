import React from "react";

import SignIn from "../../components/sign-In/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import classes from "./SignIn-and-SignUp.module.css";

const SignInSignUp = () => {
  return (
    <div className={classes.signinandsignup}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
