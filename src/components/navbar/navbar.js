import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';
import {MenuItems} from './MenuItems';


const Navbar = () => (
  <nav className='NavbarItems'>
    <h1 className='navbar-logo'>React</h1>
    <div className='menu-icon'>

    </div>
    <ul>
      {MenuItems.map((item,index)=>{
        return(
          <li key={index}>
            <a className={item.cName} href={item.url} >
              {item.title}
            </a>
          </li>
        )
      })}
      
    </ul>
  </nav>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
