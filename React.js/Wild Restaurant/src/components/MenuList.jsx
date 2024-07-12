import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <>
      {/*render a MenuItem component to each element of the props array*/}
      {foodItems.map((element, index) => <MenuItem element={element} index={index}/>)}
    </>
  );
}

export default MenuList;