import React from "react";
import MenuItem from "../MenuItem";

const MenuApp = ({ data }) => {
  return (
    <div className="App">
      {data.map((menu) => (
        <div key={menu.menuName}>
          <h1>{menu.menuName}</h1>
          {menu.menuItems.map((item) => (
            <MenuItem
              key={item.itemId}
              itemId={item.itemId}
              itemPrice={item.itemPrice}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuApp;