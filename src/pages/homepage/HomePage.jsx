import React from "react";

import Directory from "../../components/directory/Directory";

import classes from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={classes.homepage}>
      <Directory />
    </div>
  );
};

export default HomePage;
