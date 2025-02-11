import React from "react";
import MenuItem from "../MenuItem";


//makes menu app a component
const MenuApp = ({ data }) => {
  return (
    <div className="App">
    {/*Goes over each data item, loop */}
      {data.map((menu) => (
        <div key={menu.menuName}>
          <h1>{menu.menuName}</h1>
          {menu.menuItems.map((item) => (
            <MenuItem
              key={item.itemId} //is a key, identifier
              itemId={item.itemId} //prop to menuItem
              itemPrice={item.itemPrice} //prop
              itemName={item.itemName} //prop
              itemDescription={item.itemDescription} //prop
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuApp;