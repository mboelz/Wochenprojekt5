import React from 'react';
import logo from '../../assets/img/Logo-removebg.png';
import styles from '../Header/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo News" />
    </div>
  );
};

export default Logo;
