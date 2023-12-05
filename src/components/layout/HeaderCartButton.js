import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext)

  const cartItemsCount = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button type='button' className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;