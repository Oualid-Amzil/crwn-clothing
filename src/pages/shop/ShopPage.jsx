import React from "react";

import SHOP_DATA from "./Shop.data.js";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.jsx";

import classes from "./ShopPage.module.css";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className={classes["shop-page"]}>
        {collections.map(({ id, title, items }) => {
          return <CollectionPreview key={id} title={title} items={items} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
