import React from 'react'
import {menuList} from '../helper/MenuList';
import MenuItem from '../components/MenuItem';
import '../Styles/Menu.css'
function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {menuList.map((menuItem,key)=>{
                 return <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price}/>;
            })}
        </div>
    </div>
  )
}

export default Menu