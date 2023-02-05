import React from 'react';
import logo from './main_logo1.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      {props.isAuth ? (
        <div className={styles.loginBlock}>
          {props.login}
          <NavLink to="/login">
            <button onClick={props.logout}>Logout</button>
          </NavLink>
        </div>
      ) : (
        <div className={styles.loginBlock}>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
