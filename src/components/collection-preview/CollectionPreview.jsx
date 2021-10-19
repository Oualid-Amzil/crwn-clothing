import React from "react";

import classes from "./CollectionPreview.module.css";

import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = (props) => {
  return (
    <div className={classes["collection-preview"]}>
      <h1 className={classes.title}>{props.title.toUpperCase()}</h1>
      <div className={classes.preview}>
        {props.items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
