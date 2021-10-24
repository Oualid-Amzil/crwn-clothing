import React from "react";

import SignIn from "../../components/sign-In/SignIn";

import classes from "./SignIn-and-SignUp.module.css";

const SignInSignUp = () => {
  return (
    <div className={classes.signin}>
      <SignIn />
    </div>
  );
};

export default SignInSignUp;
