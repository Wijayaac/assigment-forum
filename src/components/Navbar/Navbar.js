import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className='wrapper'>
        <div className='logo'>
          <p>Forim.</p>
        </div>
        <nav>
          <li>
            <NavLink to='/' end>
              Threads
            </NavLink>
          </li>
          <li>
            <NavLink to='/add-thread'>Add Thread</NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
