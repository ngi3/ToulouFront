import React from 'react';
import './NavBar.css';
import { Btn2 } from '../Btn2/Btn2';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <h3>Groupes électrogènes</h3>
      <Btn2 />
      <Btn2/>
    </div>
  )
}
export default NavBar;