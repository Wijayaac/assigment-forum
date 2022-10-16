import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className='container'>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <p>FM.</p>
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
