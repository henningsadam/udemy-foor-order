import React from 'react';
import styles from './Header.module.css';
import coverImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartClick}/>
      </header>
      <div className={styles['main-image']}>
        <img src={coverImg} alt='meals' />
      </div>
    </>
  );
};

export default Header;