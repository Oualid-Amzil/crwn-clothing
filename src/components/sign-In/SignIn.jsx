import React from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

import classes from "./SignIn.module.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  // handleChange = (event) => {
  //   const { value, name } = event.target;

  //   this.setState({ [name]: value });
  // };

  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className={classes["sign-in"]}>
        <h2 className={classes.title}>A already have an account</h2>
        <span className={classes.title}>
          Sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="Email"
            type="email"
            value={this.state.email}
            handleChange={this.emailChangeHandler}
            label="Email"
            required
          />
          <FormInput
            name="Password"
            type="password"
            value={this.state.password}
            handleChange={this.passwordChangeHandler}
            label="Password"
            required
          />
          <div className={classes.buttons}>
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
