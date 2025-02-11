import React from "react";
import MenuItem from "../MenuItem";

export default class Menu extends React.Component {
  render() {
    const { menuName, menuItems } = this.props;
    return (
      <div>
        <h1>{menuName} Menu</h1>
        {menuItems.map((item) => (
          <MenuItem
            key={item.itemId}
            itemId={item.itemId}
            itemPrice={item.itemPrice}
            itemName={item.itemName}
            itemDescription={item.itemDescription}
          />
        ))}
      </div>
    );
  }
}