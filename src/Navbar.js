import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
<nav className="Navbar">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/pocky'>Pocky</NavLink>
    <NavLink to='/oiocha'>OiOcha</NavLink>
    <NavLink to='/ramen'>Ramen</NavLink>
</nav>
  )
}

export default Navbar;