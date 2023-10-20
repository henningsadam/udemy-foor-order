import React from 'react';
import styles from './Header.module.css';
import coverImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={coverImg} alt='meals' />
      </div>
    </>
  );
};

export default Header;