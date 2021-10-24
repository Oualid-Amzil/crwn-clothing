import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import auth from "../../firebase/firebase.utils";

import classes from "./Header.module.css";

const Header = ({ currentUser }) => {
  return (
    <div className={classes.header}>
      <Link className={classes["logo-container"]} to="/">
        <Logo className={classes.logo} />
      </Link>
      <div className={classes.options}>
        <Link className={classes.option} to="/shop">
          SHOP
        </Link>
        <Link className={classes.option} to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className={classes.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={classes.option} to="/signIn">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
