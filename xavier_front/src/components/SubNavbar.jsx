import React from 'react';
import "../css/SubNavbar.css";
import { Link } from 'react-router-dom';

function SubNavbar() {
  return (
    <div><ul>
    <li><Link to='/'>Home</Link></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><Link to='/login'>Login</Link></li>
  </ul></div>
  )
}

export default SubNavbar