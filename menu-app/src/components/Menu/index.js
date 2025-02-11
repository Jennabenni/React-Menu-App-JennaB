import React from "react";
import MenuItem from "../MenuItem";

/*React component is Menu, it defines it as a class */
export default class Menu extends React.Component {
  render() {
    //extracts menu name and items
    const { menuName, menuItems } = this.props;
    return (
      <div>
      {/*Render name is made into heading */}
        <h1>{menuName} Menu</h1>

        {/*Goes through each menu item and applies these */}
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