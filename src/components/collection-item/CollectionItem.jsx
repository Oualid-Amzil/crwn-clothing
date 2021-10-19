import React from "react";

import classes from "./CollectionItem.module.css";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className={classes["collection-item"]}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes["collection-footer"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
