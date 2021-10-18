import React from "react";

import Directory from "../../components/directory/Directory";

import classes from "./HomePage.module.css";

const HomePage = ({ history }) => {
  return (
    <div className={classes.homepage}>
      <Directory />
    </div>
  );
};

export default HomePage;
